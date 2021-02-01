import { useHistory } from 'react-router';

import { useAuthState } from 'hooks';

import { Page, VisitedPages, PageType } from './usePages.types';

const uuidRegex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;

const getPageCategory = (path: string) => {
  if (path.includes('pim') || path.includes('project')) {
    return PageType.Pim;
  } else if (path.includes('sales')) {
    return PageType.Sales;
  } else if (path.includes('email')) {
    return PageType.Email;
  } else if (path.includes('calendar')) {
    return PageType.Calendar;
  } else if (path.includes('dms')) {
    return PageType.Documents;
  } else if (path.includes('settings')) {
    return PageType.Settings;
  } else if (path.includes('task')) {
    return PageType.Tasks;
  } else if (path.includes('crm')) {
    return PageType.CRM;
  }
};

export const getSubCat = (path: string) => {
  const parts =
    path
      .split('/')
      ?.filter(part => part !== '')
      ?.slice(1) ?? [];

  if (parts.length > 1) {
    const lastPart = parts[parts.length - 1];
    const subCat = uuidRegex.test(lastPart) ? parts[parts.length - 2] : lastPart;

    return subCat;
  }

  return undefined;
};

export const usePages = (initializer = false) => {
  const history = useHistory();

  const data = localStorage.getItem('visitedBricrPages');
  const visitedPages: VisitedPages = data ? JSON.parse(data) : {};
  const { user } = useAuthState();
  let timeout: NodeJS.Timeout | null;

  const handleHistory = (path: string, action: 'POP' | 'PUSH' | 'REPLACE') => {
    const userId = user?.id;

    if (timeout) {
      clearTimeout(timeout);
    }

    const category = getPageCategory(history.location.pathname);

    if (userId && category) {
      getSubCat(path);
      const page: Page = { category, path, subCategory: getSubCat(path) };

      if (action === 'POP' || action === 'PUSH') {
        setVisitedPage(userId, page);
      } else if (action === 'REPLACE') {
        updateItem(userId, page);
      }

      timeout = setTimeout(() => {
        let name = document.getElementsByTagName('h1')[0]?.textContent;

        if (name && page.subCategory && name.toLowerCase() === page.subCategory.toLowerCase()) {
          const breadCrumbs = document.getElementsByClassName('MuiBreadcrumbs-li');
          const breadCrumbName = !!breadCrumbs.length && breadCrumbs[breadCrumbs.length - 2]?.textContent;
          name = !!breadCrumbName ? breadCrumbName : name;
        }

        if (name) {
          updateItem(userId, { ...page, name });
        }
      }, 500);
    }
  };

  const setVisitedPage = (userId: string, page: Page) => {
    const data = localStorage.getItem('visitedBricrPages');
    let pages: VisitedPages = data ? JSON.parse(data) : {};

    if (!!pages[userId]) {
      const lastPage = pages[userId][pages[userId].length - 1];

      if (lastPage.path !== page.path) {
        pages[userId].push(page);
      }
    } else {
      pages = { ...pages, [userId]: [page] };
    }

    const userPageLength = pages[userId].length;

    if (pages[userId].length > 25) {
      const userPages = pages[userId].slice(userPageLength - 25, userPageLength);

      pages[userId] = userPages;
    }

    localStorage.setItem('bricrPreLogoutPage', page.path);
    localStorage.setItem('visitedBricrPages', JSON.stringify(pages));
  };

  const updateItem = (userId: string, page: Page) => {
    const data = localStorage.getItem('visitedBricrPages');
    const pages: VisitedPages = data ? JSON.parse(data) : {};

    if (!!pages[userId]) {
      pages[userId][pages[userId].length - 1] = page;

      localStorage.setItem('visitedBricrPages', JSON.stringify(pages));
    }
  };

  if (initializer) {
    history.listen((location, action) => {
      handleHistory(location.pathname, action);
    });

    handleHistory(history.location.pathname, history.action);
  }

  return visitedPages;
};
