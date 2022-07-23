// import https from 'https'
export const state = () => ({
  content: [
    {
      name: 'Version Control and Branch Management',
    },
    {
      name: 'Introduction to UI UX',
    },
    {
      name: 'Figma',
    },
    {
      name: 'HTML',
    },
    {
      name: 'CSS',
    },
    {
      name: 'Bootstrap',
    },
    {
      name: 'Javascript Refreshment',
    },
    {
      name: 'Clean Code',
    },
    {
      name: 'Frontend Fundamental',
    },
    {
      name: 'Vue Fundamental',
    },
    {
      name: 'Vue CLI',
    },
    {
      name: 'Komponen Vue',
    },
    {
      name: 'Vue Helpers',
    },
    {
      name: 'Vue Data',
    },
    {
      name: 'Vue Quality Control',
    },
    {
      name: 'Vue UI Framework',
    },
    {
      name: 'Work Together With Product - Backend and Devops',
    },
    {
      name: 'Vue With Nuxt',
    },
    {
      name: 'Introduction to Algorithm',
    },
    {
      name: 'Relational Database',
    },
    {
      name: 'Understanding GraphQL Query',
    },
    {
      name: 'Understanding GraphQL Mutation',
    },
    {
      name: 'Understanding GraphQL Subscription',
    },
    {
      name: 'Mini Project',
    },
    {
      name: 'Capstone',
    },
  ],
  id: null,
})

export const getter = {}

export const mutations = {
  setID(state, param) {
    state.id = param
  },
}

export const actions = {
  fetchID(store, param) {
    store.commit('setID', param.id)
  },
}
