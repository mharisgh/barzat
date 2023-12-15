export default {
  name: 'destination',
  type: 'document',
  title: 'Destination',
  fields: [{
    name: 'name',
    title: 'Name of Destination',
    type: 'string'
  },
  {
    name:'destinationImg',
    title:'Choose an Image for the destination',
    type:'image'
  },
  {
    name: 'description',
    title: 'Write some description for the destination',
    type: 'string'
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