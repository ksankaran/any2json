## Any Type to JSON Converter

The purpose of this utility is to convert from `any` type to object without having to
worry about exceptions. Here are the cases for different types:

If Object, returns the same.
If String, tries to do JSON.parse. If success, returns the object else returns an empty object,
If any other type, returns an object with the input stored across the key, which is provided to the method in second parameter. If not provided, defaults to the string 'key'.

```
declare function any2json(input: any, key = 'value');
```
