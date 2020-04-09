/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import { DateField, StringField, NumberField, DurationField } from './metadata-fields/field-types';

export class Metadata {
  rawResponse: any;

  identifier: string;

  collection: StringField;

  creator: StringField;

  mediatype: StringField;

  track: NumberField;

  date: DateField;

  duration: DurationField;

  indexdate: DateField;

  downloads: NumberField;

  title: StringField;

  num_reviews: NumberField;

  constructor(json: any) {
    this.rawResponse = json;
    this.identifier = json.identifier;

    this.collection = new StringField(json.collection);
    this.track = new NumberField(json.track);
    this.date = new DateField(json.date);
    this.indexdate = new DateField(json.indexdate);
    this.duration = new DurationField(json.duration);
    this.creator = new StringField(json.creator);
    this.mediatype = new StringField(json.mediatype);
    this.downloads = new NumberField(json.downloads);
    this.title = new StringField(json.title);
    this.num_reviews = new NumberField(json.num_reviews);
  }
}
