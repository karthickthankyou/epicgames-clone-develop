import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import UnderDevelopment from './UnderDevelopment'

export default {
  title: 'organisms/UnderDevelopment',
  component: UnderDevelopment,
} as ComponentMeta<typeof UnderDevelopment>

const Template: ComponentStory<typeof UnderDevelopment> = (args) => (
  <UnderDevelopment {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Sample heading',
}

export const Long = Template.bind({})
Long.args = {
  text: 'Long description',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolorem incidunt provident explicabo ea reiciendis officiis, fuga consectetur maiores corrupti, neque necessitatibus iure laborum perspiciatis illum assumenda expedita delectus quae quos accusantium ullam vero.',
}
export const Paragraphs = Template.bind({})
Paragraphs.args = {
  text: 'Long description',
  description: (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolorem
        incidunt provident explicabo ea reiciendis officiis.
      </div>
      <div>
        Lorem ipsum dolor maiores corrupti, neque necessitatibus iure laborum
        perspiciatis illum assumenda expedita delectus quae quos accusantium
        ullam vero.
      </div>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
    </>
  ),
}
export const LongParagraphs = Template.bind({})
LongParagraphs.args = {
  text: 'Long description',
  description: (
    <>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque,
        aperiam voluptatum illo dolorum accusamus odio perferendis provident
        deserunt repudiandae beatae, fugiat consequuntur repellendus labore.
        Iure iusto ad ab maiores, quam dolor in, veritatis reprehenderit
        inventore quis quo. Tenetur dolorem alias quia dolor voluptate delectus,
        distinctio optio ipsa ducimus obcaecati in, maiores exercitationem eum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque,
        aperiam voluptatum illo dolorum accusamus odio perferendis provident
        deserunt repudiandae beatae, fugiat consequuntur repellendus labore.
        Iure iusto ad ab maiores, quam dolor in, veritatis reprehenderit
        inventore quis quo. Tenetur dolorem alias quia dolor voluptate delectus,
        distinctio optio ipsa ducimus obcaecati in, maiores exercitationem eum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque,
        aperiam voluptatum illo dolorum accusamus odio perferendis provident
        deserunt repudiandae beatae, fugiat consequuntur repellendus labore.
        Iure iusto ad ab maiores, quam dolor in, veritatis reprehenderit
        inventore quis quo. Tenetur dolorem alias quia dolor voluptate delectus,
        distinctio optio ipsa ducimus obcaecati in, maiores exercitationem eum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque,
        aperiam voluptatum illo dolorum accusamus odio perferendis provident
        deserunt repudiandae beatae, fugiat consequuntur repellendus labore.
        Iure iusto ad ab maiores, quam dolor in, veritatis reprehenderit
        inventore quis quo. Tenetur dolorem alias quia dolor voluptate delectus,
        distinctio optio ipsa ducimus obcaecati in, maiores exercitationem eum.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cumque,
        aperiam voluptatum illo dolorum accusamus odio perferendis provident
        deserunt repudiandae beatae, fugiat consequuntur repellendus labore.
        Iure iusto ad ab maiores, quam dolor in, veritatis reprehenderit
        inventore quis quo. Tenetur dolorem alias quia dolor voluptate delectus,
        distinctio optio ipsa ducimus obcaecati in, maiores exercitationem eum.
      </div>
    </>
  ),
}
