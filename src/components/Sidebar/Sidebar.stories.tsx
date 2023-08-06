import Sidebar from './Sidebar'

export default {
  children: '',
  title: 'Component/Sidebar',
  component: Sidebar
}

const Template = (args: any) => {
  return <Sidebar {...args} />
}

const props = {
  defaultProps: () => ({})
}

export const SidebarStory: any = Template.bind({})
const defaultProps = props.defaultProps()
SidebarStory.storyName = 'Sidebar'
SidebarStory.args = {
  ...defaultProps
}
