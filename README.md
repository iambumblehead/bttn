bttn
====
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

Construct click functionality around an element. Must be constructed around elements in the document.

```javascript
bttn({
    elemId : 'Bttn1',
    onClick : function (e) {
        console.log('click1');
}
bttn({
    elem : bttn2Elem,
    onClick : function (e) {
        console.log('click1');
}
```

- **event listening**

  listening is handled with [lsn][4]. You may redefine the listener method with your own.

  ```
  bttn.proto.addListener = function (elem, ename, fn) {
      yourlistener(elem, ename, fn);
  };
  ```

- **state**

   State is handled with [elemst][2].
 
   Objects returned by `bttn` have two states:
       1. active (*class="st-bttn-active"*)
       2. inactive (*class="st-bttn-inactive"*)

   State is stored on the element. If a state-related name is not found on the className, className is re-defined to include 'st-bttn-inactive'.

   ```html
   <a href="#" id="Bttn1" class="bttn st-bttn-inactive">
       <span class="bttn-label">Button1 Label</span>
   </a>           
   <a href="#" id="Bttn2" class="bttn st-bttn-active">
       <span class="bttn-label">Button2 Label</span>
   </a>                  
   ```
       

[0]: http://www.bumblehead.com                            "bumblehead"
[2]: https://github.com/iambumblehead/elemst                  "elemst"
[3]: https://github.com/iambumblehead/eventhook            "eventhook"
[4]: https://github.com/iambumblehead/lsn                        "lsn"

---------------------------------------------------------
#### <a id="install"></a>Install:

bttn may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install bttn
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/bttn.git
 $ cd bttn && npm install
 ```

---------------------------------------------------------
#### <a id="get-started">GET STARTED:

*Change the state of a bttn*
  ```javascript
  mybttn = bttn({
      elem : bttn2Elem,
      onClick : function (e) {
          console.log('click1');
      }
  });
  mybttn.activate();   // activate mybttn
  mybttn.deactivate(); // deactivate mybttn
  ```
*Do not trap events on bttn click*
  ```javascript
  mybttn = bttn({
      elem : bttn2Elem,
      isAllowEvent : true
      onClick : function (e) {
          console.log('click1');
      }
  });
  ```
  
*Call functions associated with bttn click*  
  ```javascript
  mybttn = bttn({
      elem : bttn2Elem,
      isAllowEvent : true
      onClick : function (e) {
          console.log('click1');
      }
  }).clickFire(); // click1
  ```


---------------------------------------------------------
#### <a id="test"></a>Test:

Tests are not automated and are performed by loading a document in the browser and using the browser console.

1. build test files

   `npm start`
   
2. load `test/index.html` in your browser and run tests from the console


---------------------------------------------------------
#### <a id="license">License:

 ![scrounge](http://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
