/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * DefaultReactProps for React components that can receive children
 */
export type DefaultReactProps = {
    children: React.ReactNode;
    params?: AnyObject;
  };
  
/**
 * Generic AnyObject type for representing objects with string keys.
 */
export type AnyObject<T = any> = {
    [key: string]: T;
  };
