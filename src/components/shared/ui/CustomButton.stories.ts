import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import CustomButton from './CustomButton.vue';

const meta = {
  title: 'Example/CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    symbol: { control: 'text' },
    symbolPosition: { control: 'select', options: ['left', 'right'] },
    text: { control: 'text' },
    onOnClick: { action: 'clicked' },
  },
  args: {
    disabled: false,
    symbol: '↗',
    symbolPosition: 'after',
    text: 'Custom Button',
    onOnClick: fn(),
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Continue',
    disabled: false,
    symbol: '↗',
    symbolPosition: 'after',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    await userEvent.click(button);

    expect(button).toBeEnabled();
    expect(button).toHaveTextContent('Continue');
  },
};

export const Secondary: Story = {
  args: {
    text: 'Previous',
    disabled: false,
    symbol: '↖',
    symbolPosition: 'before',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled state',
    disabled: true,
    symbolPosition: 'after',
  },
};
