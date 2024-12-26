import { mount } from '@vue/test-utils'
import About from '@/views/About.vue'

describe('About.vue', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(About)

    // Genera un snapshot del HTML renderizado
    expect(wrapper.html()).toMatchSnapshot()
  })
})
