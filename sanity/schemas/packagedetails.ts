export default {
  name: 'packagedetails',
  type: 'document',
  title: 'Package Details',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Package Images',
      of: [{ type: 'image' }],
    },
    {
      name: 'location',
      type: 'string',
      // for description use type 'text'
      title: 'Location'
    },
    {
      name: 'days',
      type: 'string',
      title: 'How many days?'
    },
    {
      name: 'nights',
      type: 'string',
      title: 'How many nights?'
    },
    {
      name: 'itinerary',
      type: 'array',
      title: 'Itinerary Details',
      of:
        [
          {
            type: 'object',
            title: 'Iteneraray details',
            fields:
              [
                {
                  type: 'string',
                  name: 'daytitle',
                  title: 'Day title',
                },
                {
                  type: 'image',
                  name: 'dayimage',
                  title: 'Day Image',
                },
                {
                  name: 'desc',
                  type: 'text',
                  title: 'desc'
                }
              ]
          },
          
        ]
    },
    {
      name: 'holidaypackage',
      title: 'Choose Holiday Package',
      type: 'reference',
      to: [
        {
          type: 'holidaypackage',
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
  ]
}