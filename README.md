
# README

## prepare

```
>>> virtualenv venv
>>> source venv/bin/activate
>>> pip install -r requirements/local.txt
```	

## Usage

* Please change the name and thumbnail of each resume, and also his ability (20%...etc)

* filter animation user "mixitup js".

* The Yes/No question I tried to use sorting in Mixitup.js. Call $("#asc").click() for yes and $("#desc").click() for no.

* To make filter work, add class "mix xxxx" to the resume <div class="col-sm-4">.

* For example, this guy is good at testing. His div class should be "mix testing col-sm-4".

* The mapping of ability filter and class is as above:


| filter | class |
| ------ | ----- |
| All | all |
| community | community |
| team work | team |
| testing | testing |
| academic | acedemic |
| coding | coding |
| project management | pm |
| innovation | innovation |
| test scores | score |
| education | edu |


* The logic of filter is, when slider is bigger than 7, it will remain only the ones who has each ability. For example, when you slide work experience to 8, it will show only the people whose class has "work" in it. When you slide to less than 2, it will show all people.

* If you wish to change it, it is in javascript function sliderOnChange (1~10).

* I used Kendo UI to draw radar chart. The default value is each ability is set in javascript function createChart()->  series -> average.

