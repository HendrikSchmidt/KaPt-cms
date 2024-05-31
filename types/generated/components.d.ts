import type { Schema, Attribute } from '@strapi/strapi';

export interface PersonalBiographie extends Schema.Component {
  collectionName: 'components_personal_biographies';
  info: {
    displayName: 'Biographie';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    Nom: Attribute.String & Attribute.Required;
    Position: Attribute.String & Attribute.Required;
    Description: Attribute.RichText & Attribute.Required;
    Portrait: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'personal.biographie': PersonalBiographie;
    }
  }
}
