export default {
  name: 'holidaypackage',
  type: 'document',
  title: 'Holiday Package',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'images',
      type: 'image',
      title: 'Package Images',
      // of: [{ type: 'image' }],
    },
    {
      name: 'location',
      type: 'string',
      // for description use type 'text'
      title: 'Location'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Package Slug',
      options: {
        source: 'name'
      }
    },
    {
      name: 'days',
      type: 'string',
      title: 'How many days & nights? eg(5N/4D)'
    },
    {
      name:'destination',
      title:'Choose Destination',
      type: 'reference',
      to:[
        {
          type:'destination',
        },
      ],
    },
  ],
}