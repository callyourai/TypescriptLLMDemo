class MessagePayload {
  private _id?: string;
  private _timestamp?: string;
  private _userId?: string;
  private _message?: string;
  private _agentId?: string;
  private _language?: Language;
  private _destination?: Destination;
  private _destinationParams?: DestinationParams;
  private _targetFormat?: TargetFormat;
  private _author?: MessageAuthor;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    id?: string,
    timestamp?: string,
    userId?: string,
    message?: string,
    agentId?: string,
    language?: Language,
    destination?: Destination,
    destinationParams?: DestinationParams,
    targetFormat?: TargetFormat,
    author?: MessageAuthor,
    additionalProperties?: Map<string, any>,
  }) {
    this._id = input.id;
    this._timestamp = input.timestamp;
    this._userId = input.userId;
    this._message = input.message;
    this._agentId = input.agentId;
    this._language = input.language;
    this._destination = input.destination;
    this._destinationParams = input.destinationParams;
    this._targetFormat = input.targetFormat;
    this._author = input.author;
    this._additionalProperties = input.additionalProperties;
  }

  /**
   * Unique identifier for the message.
   */
  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  /**
   * Timestamp of the message.
   */
  get timestamp(): string | undefined { return this._timestamp; }
  set timestamp(timestamp: string | undefined) { this._timestamp = timestamp; }

  /**
   * Unique identifier for the user.
   */
  get userId(): string | undefined { return this._userId; }
  set userId(userId: string | undefined) { this._userId = userId; }

  /**
   * Content of the message.
   */
  get message(): string | undefined { return this._message; }
  set message(message: string | undefined) { this._message = message; }

  /**
   * Unique identifier for the agent.
   */
  get agentId(): string | undefined { return this._agentId; }
  set agentId(agentId: string | undefined) { this._agentId = agentId; }

  get language(): Language | undefined { return this._language; }
  set language(language: Language | undefined) { this._language = language; }

  /**
   * Where the answer shall be sent to.
   */
  get destination(): Destination | undefined { return this._destination; }
  set destination(destination: Destination | undefined) { this._destination = destination; }

  get destinationParams(): DestinationParams | undefined { return this._destinationParams; }
  set destinationParams(destinationParams: DestinationParams | undefined) { this._destinationParams = destinationParams; }

  /**
   * Target format of the message content.
   */
  get targetFormat(): TargetFormat | undefined { return this._targetFormat; }
  set targetFormat(targetFormat: TargetFormat | undefined) { this._targetFormat = targetFormat; }

  /**
   * Who created the message.
   */
  get author(): MessageAuthor | undefined { return this._author; }
  set author(author: MessageAuthor | undefined) { this._author = author; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.id !== undefined) {
      json += `"id": ${typeof this.id === 'number' || typeof this.id === 'boolean' ? this.id : JSON.stringify(this.id)},`;
    }
    if(this.timestamp !== undefined) {
      json += `"timestamp": ${typeof this.timestamp === 'number' || typeof this.timestamp === 'boolean' ? this.timestamp : JSON.stringify(this.timestamp)},`;
    }
    if(this.userId !== undefined) {
      json += `"userId": ${typeof this.userId === 'number' || typeof this.userId === 'boolean' ? this.userId : JSON.stringify(this.userId)},`;
    }
    if(this.message !== undefined) {
      json += `"message": ${typeof this.message === 'number' || typeof this.message === 'boolean' ? this.message : JSON.stringify(this.message)},`;
    }
    if(this.agentId !== undefined) {
      json += `"agentId": ${typeof this.agentId === 'number' || typeof this.agentId === 'boolean' ? this.agentId : JSON.stringify(this.agentId)},`;
    }
    if(this.language !== undefined) {
      json += `"language": ${this.language.marshal()},`;
    }
    if(this.destination !== undefined) {
      json += `"destination": ${typeof this.destination === 'number' || typeof this.destination === 'boolean' ? this.destination : JSON.stringify(this.destination)},`;
    }
    if(this.destinationParams !== undefined) {
      json += `"destinationParams": ${this.destinationParams.marshal()},`;
    }
    if(this.targetFormat !== undefined) {
      json += `"targetFormat": ${typeof this.targetFormat === 'number' || typeof this.targetFormat === 'boolean' ? this.targetFormat : JSON.stringify(this.targetFormat)},`;
    }
    if(this.author !== undefined) {
      json += `"author": ${typeof this.author === 'number' || typeof this.author === 'boolean' ? this.author : JSON.stringify(this.author)},`;
    }
    if(this.additionalProperties !== undefined) { 
      for (const [key, value] of this.additionalProperties.entries()) {
        //Only unwrap those that are not already a property in the JSON object
        if(["id","timestamp","userId","message","agentId","language","destination","destinationParams","targetFormat","author","additionalProperties"].includes(String(key))) continue;
        json += `"${key}": ${typeof value === 'number' || typeof value === 'boolean' ? value : JSON.stringify(value)},`;
      }
    }
    //Remove potential last comma 
    return `${json.charAt(json.length-1) === ',' ? json.slice(0, json.length-1) : json}}`;
  }

  public static unmarshal(json: string | object): MessagePayload {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new MessagePayload({} as any);

    if (obj["id"] !== undefined) {
      instance.id = obj["id"];
    }
    if (obj["timestamp"] !== undefined) {
      instance.timestamp = obj["timestamp"];
    }
    if (obj["userId"] !== undefined) {
      instance.userId = obj["userId"];
    }
    if (obj["message"] !== undefined) {
      instance.message = obj["message"];
    }
    if (obj["agentId"] !== undefined) {
      instance.agentId = obj["agentId"];
    }
    if (obj["language"] !== undefined) {
      instance.language = Language.unmarshal(obj["language"]);
    }
    if (obj["destination"] !== undefined) {
      instance.destination = obj["destination"];
    }
    if (obj["destinationParams"] !== undefined) {
      instance.destinationParams = DestinationParams.unmarshal(obj["destinationParams"]);
    }
    if (obj["targetFormat"] !== undefined) {
      instance.targetFormat = obj["targetFormat"];
    }
    if (obj["author"] !== undefined) {
      instance.author = obj["author"];
    }
  
    instance.additionalProperties = new Map();
    const propsToCheck = Object.entries(obj).filter((([key,]) => {return !["id","timestamp","userId","message","agentId","language","destination","destinationParams","targetFormat","author","additionalProperties"].includes(key);}));
    for (const [key, value] of propsToCheck) {
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
class Language {
  private _locale?: string;
  private _probability?: number;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    locale?: string,
    probability?: number,
    additionalProperties?: Map<string, any>,
  }) {
    this._locale = input.locale;
    this._probability = input.probability;
    this._additionalProperties = input.additionalProperties;
  }

  /**
   * Language locale.
   */
  get locale(): string | undefined { return this._locale; }
  set locale(locale: string | undefined) { this._locale = locale; }

  /**
   * Probability of language.
   */
  get probability(): number | undefined { return this._probability; }
  set probability(probability: number | undefined) { this._probability = probability; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.locale !== undefined) {
      json += `"locale": ${typeof this.locale === 'number' || typeof this.locale === 'boolean' ? this.locale : JSON.stringify(this.locale)},`;
    }
    if(this.probability !== undefined) {
      json += `"probability": ${typeof this.probability === 'number' || typeof this.probability === 'boolean' ? this.probability : JSON.stringify(this.probability)},`;
    }
    if(this.additionalProperties !== undefined) { 
      for (const [key, value] of this.additionalProperties.entries()) {
        //Only unwrap those that are not already a property in the JSON object
        if(["locale","probability","additionalProperties"].includes(String(key))) continue;
        json += `"${key}": ${typeof value === 'number' || typeof value === 'boolean' ? value : JSON.stringify(value)},`;
      }
    }
    //Remove potential last comma 
    return `${json.charAt(json.length-1) === ',' ? json.slice(0, json.length-1) : json}}`;
  }

  public static unmarshal(json: string | object): Language {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new Language({} as any);

    if (obj["locale"] !== undefined) {
      instance.locale = obj["locale"];
    }
    if (obj["probability"] !== undefined) {
      instance.probability = obj["probability"];
    }
  
    instance.additionalProperties = new Map();
    const propsToCheck = Object.entries(obj).filter((([key,]) => {return !["locale","probability","additionalProperties"].includes(key);}));
    for (const [key, value] of propsToCheck) {
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
/**
 * Where the answer shall be sent to.
 */
enum Destination {
  CHAT = "Chat",
  CALL = "Call",
  VIDEO = "Video",
  OTHER = "Other",
}
class DestinationParams {
  private _strings?: string[];
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    strings?: string[],
    additionalProperties?: Map<string, any>,
  }) {
    this._strings = input.strings;
    this._additionalProperties = input.additionalProperties;
  }

  get strings(): string[] | undefined { return this._strings; }
  set strings(strings: string[] | undefined) { this._strings = strings; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.strings !== undefined) {
      let stringsJsonValues: any[] = [];
      for (const unionItem of this.strings) {
        stringsJsonValues.push(`${typeof unionItem === 'number' || typeof unionItem === 'boolean' ? unionItem : JSON.stringify(unionItem)}`);
      }
      json += `"strings": [${stringsJsonValues.join(',')}],`;
    }
    if(this.additionalProperties !== undefined) { 
      for (const [key, value] of this.additionalProperties.entries()) {
        //Only unwrap those that are not already a property in the JSON object
        if(["strings","additionalProperties"].includes(String(key))) continue;
        json += `"${key}": ${typeof value === 'number' || typeof value === 'boolean' ? value : JSON.stringify(value)},`;
      }
    }
    //Remove potential last comma 
    return `${json.charAt(json.length-1) === ',' ? json.slice(0, json.length-1) : json}}`;
  }

  public static unmarshal(json: string | object): DestinationParams {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new DestinationParams({} as any);

    if (obj["strings"] !== undefined) {
      instance.strings = obj["strings"];
    }
  
    instance.additionalProperties = new Map();
    const propsToCheck = Object.entries(obj).filter((([key,]) => {return !["strings","additionalProperties"].includes(key);}));
    for (const [key, value] of propsToCheck) {
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
/**
 * Target format of the message content.
 */
enum TargetFormat {
  RESERVED_TEXT = "Text",
  VIDEO = "Video",
  AUDIO = "Audio",
  AUDIO_STREAM = "AudioStream",
  OTHER = "Other",
}
/**
 * Who created the message.
 */
enum MessageAuthor {
  USER = "User",
  AGENT = "Agent",
  OTHER = "Other",
}
class ConversationPayload {
  private _id?: string;
  private _started?: string;
  private _userId?: string;
  private _agentId?: string;
  private _messages?: MessagePayload[];
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    id?: string,
    started?: string,
    userId?: string,
    agentId?: string,
    messages?: MessagePayload[],
    additionalProperties?: Map<string, any>,
  }) {
    this._id = input.id;
    this._started = input.started;
    this._userId = input.userId;
    this._agentId = input.agentId;
    this._messages = input.messages;
    this._additionalProperties = input.additionalProperties;
  }

  /**
   * Unique identifier for the conversation.
   */
  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  /**
   * Timestamp when the conversation started.
   */
  get started(): string | undefined { return this._started; }
  set started(started: string | undefined) { this._started = started; }

  /**
   * Unique identifier of the user holding the conversation.
   */
  get userId(): string | undefined { return this._userId; }
  set userId(userId: string | undefined) { this._userId = userId; }

  /**
   * Unique identifier of the agent of the conversation.
   */
  get agentId(): string | undefined { return this._agentId; }
  set agentId(agentId: string | undefined) { this._agentId = agentId; }

  /**
   * List of messages in the conversation.
   */
  get messages(): MessagePayload[] | undefined { return this._messages; }
  set messages(messages: MessagePayload[] | undefined) { this._messages = messages; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.id !== undefined) {
      json += `"id": ${typeof this.id === 'number' || typeof this.id === 'boolean' ? this.id : JSON.stringify(this.id)},`;
    }
    if(this.started !== undefined) {
      json += `"started": ${typeof this.started === 'number' || typeof this.started === 'boolean' ? this.started : JSON.stringify(this.started)},`;
    }
    if(this.userId !== undefined) {
      json += `"userId": ${typeof this.userId === 'number' || typeof this.userId === 'boolean' ? this.userId : JSON.stringify(this.userId)},`;
    }
    if(this.agentId !== undefined) {
      json += `"agentId": ${typeof this.agentId === 'number' || typeof this.agentId === 'boolean' ? this.agentId : JSON.stringify(this.agentId)},`;
    }
    if(this.messages !== undefined) {
      let messagesJsonValues: any[] = [];
      for (const unionItem of this.messages) {
        messagesJsonValues.push(`${unionItem.marshal()}`);
      }
      json += `"messages": [${messagesJsonValues.join(',')}],`;
    }
    if(this.additionalProperties !== undefined) { 
      for (const [key, value] of this.additionalProperties.entries()) {
        //Only unwrap those that are not already a property in the JSON object
        if(["id","started","userId","agentId","messages","additionalProperties"].includes(String(key))) continue;
        json += `"${key}": ${typeof value === 'number' || typeof value === 'boolean' ? value : JSON.stringify(value)},`;
      }
    }
    //Remove potential last comma 
    return `${json.charAt(json.length-1) === ',' ? json.slice(0, json.length-1) : json}}`;
  }

  public static unmarshal(json: string | object): ConversationPayload {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new ConversationPayload({} as any);

    if (obj["id"] !== undefined) {
      instance.id = obj["id"];
    }
    if (obj["started"] !== undefined) {
      instance.started = obj["started"];
    }
    if (obj["userId"] !== undefined) {
      instance.userId = obj["userId"];
    }
    if (obj["agentId"] !== undefined) {
      instance.agentId = obj["agentId"];
    }
    if (obj["messages"] !== undefined) {
      instance.messages = obj["messages"];
    }
  
    instance.additionalProperties = new Map();
    const propsToCheck = Object.entries(obj).filter((([key,]) => {return !["id","started","userId","agentId","messages","additionalProperties"].includes(key);}));
    for (const [key, value] of propsToCheck) {
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
class StreamingAnswerPayload {
  private _id?: string;
  private _timestamp?: string;
  private _userId?: string;
  private _message?: string;
  private _agentId?: string;
  private _language?: Language;
  private _destination?: Destination;
  private _destinationParams?: DestinationParams;
  private _targetFormat?: TargetFormat;
  private _author?: MessageAuthor;
  private _completed?: boolean;
  private _additionalProperties?: Map<string, any>;

  constructor(input: {
    id?: string,
    timestamp?: string,
    userId?: string,
    message?: string,
    agentId?: string,
    language?: Language,
    destination?: Destination,
    destinationParams?: DestinationParams,
    targetFormat?: TargetFormat,
    author?: MessageAuthor,
    completed?: boolean,
    additionalProperties?: Map<string, any>,
  }) {
    this._id = input.id;
    this._timestamp = input.timestamp;
    this._userId = input.userId;
    this._message = input.message;
    this._agentId = input.agentId;
    this._language = input.language;
    this._destination = input.destination;
    this._destinationParams = input.destinationParams;
    this._targetFormat = input.targetFormat;
    this._author = input.author;
    this._completed = input.completed;
    this._additionalProperties = input.additionalProperties;
  }

  /**
   * Unique identifier for the message.
   */
  get id(): string | undefined { return this._id; }
  set id(id: string | undefined) { this._id = id; }

  /**
   * Timestamp of the message.
   */
  get timestamp(): string | undefined { return this._timestamp; }
  set timestamp(timestamp: string | undefined) { this._timestamp = timestamp; }

  /**
   * Unique identifier for the user.
   */
  get userId(): string | undefined { return this._userId; }
  set userId(userId: string | undefined) { this._userId = userId; }

  /**
   * Content of the message.
   */
  get message(): string | undefined { return this._message; }
  set message(message: string | undefined) { this._message = message; }

  /**
   * Unique identifier for the agent.
   */
  get agentId(): string | undefined { return this._agentId; }
  set agentId(agentId: string | undefined) { this._agentId = agentId; }

  get language(): Language | undefined { return this._language; }
  set language(language: Language | undefined) { this._language = language; }

  /**
   * Where the answer shall be sent to.
   */
  get destination(): Destination | undefined { return this._destination; }
  set destination(destination: Destination | undefined) { this._destination = destination; }

  get destinationParams(): DestinationParams | undefined { return this._destinationParams; }
  set destinationParams(destinationParams: DestinationParams | undefined) { this._destinationParams = destinationParams; }

  /**
   * Target format of the message content.
   */
  get targetFormat(): TargetFormat | undefined { return this._targetFormat; }
  set targetFormat(targetFormat: TargetFormat | undefined) { this._targetFormat = targetFormat; }

  /**
   * Who created the message.
   */
  get author(): MessageAuthor | undefined { return this._author; }
  set author(author: MessageAuthor | undefined) { this._author = author; }

  /**
   * Flag to indicate if the streaming is completed.
   */
  get completed(): boolean | undefined { return this._completed; }
  set completed(completed: boolean | undefined) { this._completed = completed; }

  get additionalProperties(): Map<string, any> | undefined { return this._additionalProperties; }
  set additionalProperties(additionalProperties: Map<string, any> | undefined) { this._additionalProperties = additionalProperties; }

  public marshal() : string {
    let json = '{'
    if(this.id !== undefined) {
      json += `"id": ${typeof this.id === 'number' || typeof this.id === 'boolean' ? this.id : JSON.stringify(this.id)},`;
    }
    if(this.timestamp !== undefined) {
      json += `"timestamp": ${typeof this.timestamp === 'number' || typeof this.timestamp === 'boolean' ? this.timestamp : JSON.stringify(this.timestamp)},`;
    }
    if(this.userId !== undefined) {
      json += `"userId": ${typeof this.userId === 'number' || typeof this.userId === 'boolean' ? this.userId : JSON.stringify(this.userId)},`;
    }
    if(this.message !== undefined) {
      json += `"message": ${typeof this.message === 'number' || typeof this.message === 'boolean' ? this.message : JSON.stringify(this.message)},`;
    }
    if(this.agentId !== undefined) {
      json += `"agentId": ${typeof this.agentId === 'number' || typeof this.agentId === 'boolean' ? this.agentId : JSON.stringify(this.agentId)},`;
    }
    if(this.language !== undefined) {
      json += `"language": ${this.language.marshal()},`;
    }
    if(this.destination !== undefined) {
      json += `"destination": ${typeof this.destination === 'number' || typeof this.destination === 'boolean' ? this.destination : JSON.stringify(this.destination)},`;
    }
    if(this.destinationParams !== undefined) {
      json += `"destinationParams": ${this.destinationParams.marshal()},`;
    }
    if(this.targetFormat !== undefined) {
      json += `"targetFormat": ${typeof this.targetFormat === 'number' || typeof this.targetFormat === 'boolean' ? this.targetFormat : JSON.stringify(this.targetFormat)},`;
    }
    if(this.author !== undefined) {
      json += `"author": ${typeof this.author === 'number' || typeof this.author === 'boolean' ? this.author : JSON.stringify(this.author)},`;
    }
    if(this.completed !== undefined) {
      json += `"completed": ${typeof this.completed === 'number' || typeof this.completed === 'boolean' ? this.completed : JSON.stringify(this.completed)},`;
    }
    if(this.additionalProperties !== undefined) { 
      for (const [key, value] of this.additionalProperties.entries()) {
        //Only unwrap those that are not already a property in the JSON object
        if(["id","timestamp","userId","message","agentId","language","destination","destinationParams","targetFormat","author","completed","additionalProperties"].includes(String(key))) continue;
        json += `"${key}": ${typeof value === 'number' || typeof value === 'boolean' ? value : JSON.stringify(value)},`;
      }
    }
    //Remove potential last comma 
    return `${json.charAt(json.length-1) === ',' ? json.slice(0, json.length-1) : json}}`;
  }

  public static unmarshal(json: string | object): StreamingAnswerPayload {
    const obj = typeof json === "object" ? json : JSON.parse(json);
    const instance = new StreamingAnswerPayload({} as any);

    if (obj["id"] !== undefined) {
      instance.id = obj["id"];
    }
    if (obj["timestamp"] !== undefined) {
      instance.timestamp = obj["timestamp"];
    }
    if (obj["userId"] !== undefined) {
      instance.userId = obj["userId"];
    }
    if (obj["message"] !== undefined) {
      instance.message = obj["message"];
    }
    if (obj["agentId"] !== undefined) {
      instance.agentId = obj["agentId"];
    }
    if (obj["language"] !== undefined) {
      instance.language = Language.unmarshal(obj["language"]);
    }
    if (obj["destination"] !== undefined) {
      instance.destination = obj["destination"];
    }
    if (obj["destinationParams"] !== undefined) {
      instance.destinationParams = DestinationParams.unmarshal(obj["destinationParams"]);
    }
    if (obj["targetFormat"] !== undefined) {
      instance.targetFormat = obj["targetFormat"];
    }
    if (obj["author"] !== undefined) {
      instance.author = obj["author"];
    }
    if (obj["completed"] !== undefined) {
      instance.completed = obj["completed"];
    }
  
    instance.additionalProperties = new Map();
    const propsToCheck = Object.entries(obj).filter((([key,]) => {return !["id","timestamp","userId","message","agentId","language","destination","destinationParams","targetFormat","author","completed","additionalProperties"].includes(key);}));
    for (const [key, value] of propsToCheck) {
      instance.additionalProperties.set(key, value as any);
    }
    return instance;
  }
}
