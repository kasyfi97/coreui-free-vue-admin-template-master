export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      },attributes: { disabled: true },
    },
    {
      title: true,
      name: 'Menu',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'PIC',
      url: '/base/tablepic',
      icon: 'icon-puzzle'
    },
    {
      name: 'Mitra',
      url: '/base/tables',
      icon: 'icon-puzzle'
    },
    {
      name: 'Dokumen',
      url: '/base/tabledokumen',
      icon: 'icon-puzzle'
    },
    {
      name: 'Users',
      url: '/base/Users',
      icon: 'icon-puzzle'
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
      ]
    },
  ]
}
