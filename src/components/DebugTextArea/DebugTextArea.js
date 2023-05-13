import EventBus from "@/js/Event/EventBus";

class EmitConsoleLogMessage {
  constructor() {
    let logfunction = console.log;
    console.log = function () {
      // output to console
      logfunction(...arguments);

      // emit console log args to event bus, components who is interested in console log args can process the args
      EventBus.$emit("console-log", arguments);
    };
  }
}

export default EmitConsoleLogMessage;
