import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });


  it('should read and write a string', () => {
    const key = 'my_key';
    const value = 'my_value';

    service.setItem(key, value);

    expect(service.getItem(key)).toEqual(value);
  });

  it('should read and write a bool', () => {
    const key = 'my_key';
    const value = true;

    service.setItem(key, value);

    expect(service.getItem(key)).toEqual(value);
  });

  it('should read and write an object', () => {
    const key = 'my_key';
    const value = {my_property: 'my_value'};

    service.setItem(key, value);

    expect(service.getItem(key)).toEqual(value);
  });

  it('should remove object ', () => {
    const key = 'my_key';
    const value =  {json: 'json', ligma: 'balls'};

    service.setItem(key, value);
    service.removeItem(key);

    expect(service.getItem(key)).toBeNull();
  });

  it('should clear all', () => {
    const keys = ['key1', 'key2', 'key3'];
    const values = ['value1', 'value2', 'value3'];

    keys.forEach((key, index) => service.setItem(key, values[index]));
    service.clear();

    keys.forEach(key => expect(service.getItem(key)).toBeNull());
  });
});