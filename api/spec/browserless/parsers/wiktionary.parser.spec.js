/**
 * Magyar Szavak - API
 * wiktionary.parser.spec.js
 * 
 * @author mlbors
 * @version 1.0.0.0
 * @since 2019.03.27
 */

/*******************/
/***** IMPORTS *****/
/*******************/

const fs = require('fs')

require('dotenv').config()

const wiktionaryParser = require('../../../parsers/wiktionary.parser')

/************************************************************/
/************************************************************/

/*********************/
/***** ATTIBUTES *****/
/*********************/

/**
 * @var json rawData json raw data coming from wiktionary
 * @var object mockData parsed json data coming from wiktionary
 */

const rawData = fs.readFileSync(`${__dirname}/../../data/wiktionary/fa.json`)
const mockData = JSON.parse(rawData) 

/************************************************************/
/************************************************************/

/**********************/
/***** TEST SUITE *****/
/**********************/

describe('Test Wiktionary Parser', () => {

  /***********************/
  /***** BEFORE EACH *****/
  /***********************/

  beforeEach(() => {

  })

  /************************************************************/
  /************************************************************/

  /**********************/
  /***** AFTER EACH *****/
  /**********************/

  afterEach(() => {

  })

  /************************************************************/
  /************************************************************/
    
  /***********************/
  /***** TEST OBJECT *****/
  /***********************/

  it('Wiktionary Parser should not be null', () => {
    expect(wiktionaryParser).not.toBe(null)
  })

  /************************************************************/
  /************************************************************/
    
  /**************************************************/
  /***** TEST PARSE HTML CONTENT RETURNED VALUE *****/
  /**************************************************/

  it('Wiktionary Parser should return a Promise', () => {
    const promise = wiktionaryParser.parseHTMLContent('foo')
    expect(typeof(promise)).toBe('object')
    expect(promise instanceof Promise).toBe(true)
  })

  /************************************************************/
  /************************************************************/
    
  /********************************************************/
  /***** TEST PARSE HTML CONTENT WITH UNDEFINED INPUT *****/
  /********************************************************/

  it('Wiktionary Parser should return null if input is undefined', (done) => {
    wiktionaryParser.parseHTMLContent(undefined).then(result => {
      expect(result).toBe(null)
      done()
    })
  })

  /************************************************************/
  /************************************************************/
    
  /***************************************************/
  /***** TEST PARSE HTML CONTENT WITH NULL INPUT *****/
  /***************************************************/

  it('Wiktionary Parser should return null if input is null', (done) => {
    wiktionaryParser.parseHTMLContent(null).then(result => {
      expect(result).toBe(null)
      done()
    })
  })

  /************************************************************/
  /************************************************************/
    
  /****************************************************/
  /***** TEST PARSE HTML CONTENT WITH EMPTY INPUT *****/
  /****************************************************/

  it('Wiktionary Parser should return null if input is empty', (done) => {
    wiktionaryParser.parseHTMLContent('').then(result => {
      expect(result).toBe(null)
      done()
    })
  })

  /************************************************************/
  /************************************************************/
    
  /*****************************************************/
  /***** TEST PARSE HTML CONTENT ONLY WITH KEYWORD *****/
  /*****************************************************/

  it('Wiktionary Parser should return null if only keyword is present', (done) => {
    wiktionaryParser.parseHTMLContent('#Hungarian').then(result => {
      expect(result).toBe(null)
      done()
    })
  })

  /************************************************************/
  /************************************************************/
    
  /*****************************************************/
  /***** TEST PARSE HTML CONTENT ONLY WITH SECTION *****/
  /*****************************************************/

  it('Wiktionary Parser should return null if only section is present', (done) => {
    wiktionaryParser.parseHTMLContent('id="Hungarian"').then(result => {
      expect(result).toBe(null)
      done()
    })
  })

  /************************************************************/
  /************************************************************/
    
  /***********************************************************************/
  /***** TEST PARSE HTML CONTENT WITHOUT KEYWORD AND WITHOUT SECTION *****/
  /************************************************************************/

  it('Wiktionary Parser should return null if keyword and section are missing', (done) => {
    wiktionaryParser.parseHTMLContent('#Fooid="foo').then(result => {
      expect(result).toBe(null)
      done()
    })
  })

  /************************************************************/
  /************************************************************/
    
  /********************************************************************/
  /***** TEST PARSE HTML CONTENT WITH KEYWORD BUT WITHOUT SECTION *****/
  /********************************************************************/

  it('Wiktionary Parser should return null if keyword is present and section is missing', (done) => {
    wiktionaryParser.parseHTMLContent('#Hungarianfooid="foo"').then(result => {
      expect(result).toBe(null)
      done()
    })
  })

  /************************************************************/
  /************************************************************/
    
  /**************************************************/
  /***** TEST PARSE HTML CONTENT RESOLVED VALUE *****/
  /**************************************************/

  it('Wiktionary Parser returned Promise should resolve an object', (done) => {
    wiktionaryParser.parseHTMLContent(mockData.parse.text['*']).then(result => {
      expect(typeof(result)).toBe('object')
      done()
    })
  })

})
      
  
  