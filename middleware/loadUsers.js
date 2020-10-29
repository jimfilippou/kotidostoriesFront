
export default async function ({store, $axios}) {
  await store.dispatch('getUsers')
}
