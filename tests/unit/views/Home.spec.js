import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'
import PostsView from '@/views/PostsView.vue'

describe('HomeView', () => {
  it('renders an image with alt text "Vue logo"', () => {
    const wrapper = mount(HomeView)
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true) // Verifica que la imagen exista
    expect(img.attributes('alt')).toBe('Vue logo') // Verifica que el alt sea "Vue logo"
  })

  it('renders the PostsView component', () => {
    const wrapper = mount(HomeView)
    const postsView = wrapper.findComponent(PostsView)
    expect(postsView.exists()).toBe(true) // Verifica que el componente PostsView esté presente
  })
})
