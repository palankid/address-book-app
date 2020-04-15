/**
 * Nationalities config
 * @module routes/Settings/nationality
 */

const ch = 'ch';
const es = 'es';
const fr = 'fr';
const gb = 'gb';

/**
 * Nationalities config for dropdown component
 */
const nationalities = [
  {
    key: ch,
    text: 'Swiss',
    value: ch,
    flag: ch,
  },
  {
    key: es,
    text: 'Spanish',
    value: es,
    flag: es,
  },
  {
    key: fr,
    text: 'French',
    value: fr,
    flag: fr,
  },
  {
    key: gb,
    text: 'English',
    value: gb,
    flag: gb,
  }
];

export const nationalityKeys = { ch, es, fr, gb };

export default nationalities;
