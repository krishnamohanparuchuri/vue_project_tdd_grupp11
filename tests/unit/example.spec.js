import { shallowMount } from '@vue/test-utils';
import NavigationPage from '@/components/NavigationPage.vue';

describe('NavigationPage.vue', () => {
  it('renders the hello world', () => {
    const msg = 'hello world';
    const wrapper = shallowMount(NavigationPage);
    expect(wrapper.find('h1').text()).toMatch(msg);
  });


  test(' it should navigate to /about page', () => {

  })

});
