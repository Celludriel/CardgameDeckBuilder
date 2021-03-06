export const schema = {
  disableKeyCompression: true,
  title: 'Card schema',
  description: 'Database schema for a pokemon card',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      index: true
    },
    name: {
      type: 'string',
      index: true
    },
    nationalPokedexNumber: {
      type: 'integer'
    },
    imageUrl: {
      type: 'string'
    },
    imageUrlHiRes: {
      type: 'string'
    },
    "types": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    supertype: {
      type: 'string',
      index: true
    },
    subtype: {
      type: 'string'
    },
    evolvesFrom: {
      type: 'string'
    },
    "ancientTrait": {
      "type": "object",
      "properties": {
        "name": {
            "type": "string"
        },
        "text": {
            "type": "string"
        }
      }
    },
    "ability": {
      "type": "object",
      "properties": {
        "name": {
            "type": "string"
        },
        "text": {
            "type": "string"
        },
        "type": {
            "type": "string"
        }
      }
    },
    "hp": {
      "type": "string"
    },
    "retreatCost": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "convertedRetreatCost": {
        "type": "integer"
    },
    "number": {
        "type": "string"
    },
    "artist": {
        "type": "string"
    },
    "rarity": {
        "type": "string"
    },
    "series": {
        "type": "string"
    },
    "pokeset": {
        "type": "string"
    },
    "setCode": {
        "type": "string",
        index: true
    },
    "text": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "attacks": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "cost": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "name": {
                    "type": "string"
                },
                "text": {
                    "type": "string"
                },
                "damage": {
                    "type": ["integer", "string"]
                },
                "convertedEnergyCost": {
                    "type": "integer"
                }
            },
        }
    },
    "weaknesses": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "value": {
                    "type": "string"
                }
            }
        }
    },
    "resistances": {
        "type": "array",
        "items": {
            "type": "object",
            "properties": {
                "type": {
                    "type": "string"
                },
                "value": {
                    "type": "string"
                }
            }
        }
    }
  }
}
