export enum PAGE_TABS {
  Overview = '/overview',
  History = '/history',
}

export const PAGE_TAB_NAME: Record<PAGE_TABS, string> = {
  [PAGE_TABS.History]: 'History',
  [PAGE_TABS.Overview]: 'Overview',
};
