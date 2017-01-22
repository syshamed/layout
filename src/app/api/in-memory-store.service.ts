export class InMemoryStoreService {
  /**
  * Creates fresh copy of data each time.
  * Safe for consuming service to morph arrays and objects.
  */
  createDb() {
    let questionnaire = [
     {
      "name": "Gender",
      "type": "single-response",
      "answers": [ "Male" , "Female"],
      "responses":[]
    },
    {
      "name": "Location",
      "type": "single-response",
      "answers": ["Cairo" , "Alexandria" , "Tanta"],
      "responses":[]
    },
    {
      "name": "Education",
      "type": "multiple-response",
      "answers": ["BSC" , "MSC" , "PHD"],
      "responses":[]
    }
    ]
    return { questionnaire };
  }
}
