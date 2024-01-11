export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'testimonial',
        title: 'Testimonial',
        type: 'text',
        description: 'The testimonial content from the individual.',
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the person giving the testimonial.',
      },
      {
        name: 'designation',
        title: 'Designation',
        type: 'string',
        description: 'The designation or role of the person giving the testimonial.',
      },
      {
        name: 'company',
        title: 'Company',
        type: 'string',
        description: 'The company or organization of the person giving the testimonial.',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables you to set a focal point for the image
        },
        description: 'The image of the person giving the testimonial.',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'designation',
        media: 'image',
      },
    },
  };
  