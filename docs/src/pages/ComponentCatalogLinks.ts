type ComponentCatalogType = {
  title: string;
  /**
   * URL to React component doc, or description for why URL is not available
   */
  path: string;
  image: string;
};

export const componentCatalogLinks: ComponentCatalogType[] = [
  {
    title: 'App Bar / Header',
    path: 'app-bar',
    image: 'https://picsum.photos/id/237/150/100',
  },
  {
    title: 'Channel Value',
    path: 'channel-value',
    image: 'https://picsum.photos/seed/picsum/150/100',
  },
  {
    title: 'Drawer',
    path: 'drawer',
    image: 'https://picsum.photos/150/100?grayscale',
  },
  {
    title: 'Empty State',
    path: 'empty-state',
    image: 'https://picsum.photos/150/100/?blur',
  },
  {
    title: 'Hero',
    path: 'hero',
    image: 'https://picsum.photos/id/870/150/100?grayscale&blur=2',
  },
  {
    title: 'Info List Item',
    path: 'info-list-item',
    image: 'https://picsum.photos/150/100',
  },
  {
    title: 'List Item Tag',
    path: 'list-item-tag',
    image: 'https://picsum.photos/150/100',
  },
  {
    title: 'Scorecard',
    path: 'score-card',
    image: 'https://picsum.photos/seed/picsum/150/100',
  },
  {
    title: 'Three Liner',
    path: 'three-liner',
    image: 'https://picsum.photos/150/100?grayscale',
  },
  {
    title: 'Toolbar Menu',
    path: 'toolbar-menu',
    image: 'https://picsum.photos/seed/picsum/150/100',
  },
  {
    title: 'User Menu',
    path: 'user-menu',
    image: 'https://picsum.photos/id/237/150/100',
  },
];
