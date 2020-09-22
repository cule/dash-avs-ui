export default function sanitizeEvents(events){
    // This method sanitizes the info and event objects that are
    // output by onClick, onHover, etc. Then, it proceeds to call setProps.
    const propsToClean = ["layer", "target", "rootElement"];

    Object.keys(events).map(key => {
      const e = events[key];
      // Cleaning starts here:
      propsToClean.map(prop => {
        if (prop in e && e[prop] !== null){
          e[prop] = e[prop].toString();
        }
      })
    })

    return events;
  }