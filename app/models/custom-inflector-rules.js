import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('camera', 'Cameras');
inflector.irregular('object', 'Objects');
inflector.irregular('event', 'Events');

export default {};
