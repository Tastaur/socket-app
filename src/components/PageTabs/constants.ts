export enum PAGE_TABS {
  Overview = 'Overview',
  History = 'History',
}

export const PAGE_TABS_LINK: Record<PAGE_TABS, string> = {
  [PAGE_TABS.History]: '/history',
  [PAGE_TABS.Overview]: '/overview',
};
