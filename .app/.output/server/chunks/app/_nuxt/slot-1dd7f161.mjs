import { f as flatUnwrap } from './MDCSlot-9d8a19f8.mjs';
import { renderSlot as renderSlot$1 } from 'vue';

const renderSlot = (slots, name, props, ...rest) => {
  if (slots[name]) {
    return renderSlot$1({ ...slots, [name]: () => flatUnwrap(slots[name](), props?.unwrap) }, name, props, ...rest);
  }
  return renderSlot$1(slots, name, props, ...rest);
};

export { renderSlot as r };
//# sourceMappingURL=slot-1dd7f161.mjs.map
