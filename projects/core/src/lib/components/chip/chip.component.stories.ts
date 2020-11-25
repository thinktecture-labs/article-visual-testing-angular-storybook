import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CoreModule} from '../../core.module';
import {ChipComponent} from './chip.component';

export default {
  title: 'Core / Chip',
  component: ChipComponent,
  decorators: [
    moduleMetadata({
      imports: [CoreModule],
    }),
  ],
} as Meta;


const Template: Story<ChipComponent> = (props: ChipComponent) => ({
  component: ChipComponent,
  props,
});

export const Default = Template.bind({});
Default.args = {
  label: 'foo',
  count: 42
};
