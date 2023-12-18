export default {
  name: 'holidaypackage',
  type: 'document',
  title: 'Holiday Package',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Package Name'
    },
    {
      name: 'images',
      type: 'image',
      title: 'Package Image',
      // of: [{ type: 'image' }],
    },
    {
      name: 'days',
      type: 'string',
      title: 'How many days & nights? eg(5N/4D)'
    },
    {
      name: 'location',
      type: 'string',
      // for description use type 'text'
      title: 'Location'
    },
    {
      name: 'flights',
      type: 'string',
      title: 'Flights'
    },
    {
      name: 'hotels',
      type: 'string',
      title: 'Hotels'
    },
    {
      name: 'activities',
      type: 'string',
      title: 'Activities'
    },
    {
      name: 'transfers',
      type: 'string',
      title: 'Transfers'
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
    {
      name: 'slug',
      type: 'slug',
      title: 'Package Slug',
      options: {
        source: 'name'
      }
    },
  ],
}