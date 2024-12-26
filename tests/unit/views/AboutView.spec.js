import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => {
  it('renders the About Us page correctly', () => {
    const wrapper = mount(AboutView)

    // Verifica que el título y el párrafo estén presentes
    expect(wrapper.find('h1').text()).toBe('About Us')
    expect(wrapper.find('p').text()).toBe(
      'We are a team of passionate developers committed to building amazing web applications.',
    )
  })

  it('renders the team image correctly', () => {
    const wrapper = mount(AboutView)

    // Verifica que la imagen se haya cargado correctamente
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('alt')).toBe('Team Image')
    expect(img.attributes('src')).toBe('https://via.placeholder.com/500x300')
  })

  it('renders the mission statement', () => {
    const wrapper = mount(AboutView)

    // Verifica que la declaración de misión esté presente
    expect(wrapper.find('h2').text()).toBe('Our Mission')
    expect(wrapper.findAll('p').at(1).text()).toBe(
      'Our mission is to create solutions that make a difference in the world by simplifying complex problems.',
    )
  })
})
