import { mount } from '@vue/test-utils'
import ContactView from '@/views/ContactView.vue'

describe('ContactView', () => {
  it('renders the contact form', () => {
    const wrapper = mount(ContactView)

    // Verifica que los elementos del formulario estén presentes
    expect(wrapper.find('h1').text()).toBe('Contact Us')
    expect(wrapper.find('label[for="name"]').text()).toBe('Name:')
    expect(wrapper.find('label[for="email"]').text()).toBe('Email:')
    expect(wrapper.find('button').text()).toBe('Submit')
  })

  it('submits the form with the correct values', async () => {
    const wrapper = mount(ContactView)

    // Completa los campos del formulario
    await wrapper.find('input#name').setValue('John Doe')
    await wrapper.find('input#email').setValue('john.doe@example.com')

    // Hacer submit
    await wrapper.find('form').trigger('submit.prevent')

    // Verifica que el mensaje de alert se muestra correctamente
    expect(window.alert).toHaveBeenCalledWith('Form submitted with: John Doe, john.doe@example.com')
  })
})
