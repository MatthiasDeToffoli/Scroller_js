const OFFSET = 10;
const MIN_TIME_TO_SCROLL = 1000;

const CLASS_SCROLLER_CLASS_BOTTOM = ".Scroller.Bottom";
const CLASS_SCROLLER_CLASS_TOP = ".Scroller.Top";
const ID_TOP_SCROLL = "#TopScroll";
const CLASS_ELEMENT_TO_SCROLL= ".ElementToScroll";

const HTML_BODY = "html, body";

const EVENT_LOAD = "load";

const CSS_DISPLAY = "display";
const CSS_NONE = "none";
const CSS_BLOCK = "block";

//Show or hide the scroller arrows when the window just loaded
$(window).on(EVENT_LOAD, ShowScroller);
//Show or hide the scroller arrows when the window just scrolled
$(window).scroll(ShowScroller);

$(CLASS_SCROLLER_CLASS_TOP).click(ScrollUp);
$(CLASS_SCROLLER_CLASS_BOTTOM).click(ScrollDown);

//Show or hide the scroller arrows
function ShowScroller()
{
	if($(window).scrollTop() >= ($(window).height() - screen.height))
	{
		$(CLASS_SCROLLER_CLASS_BOTTOM).css(CSS_DISPLAY,CSS_NONE);
	}
	else 
	{
		$(CLASS_SCROLLER_CLASS_BOTTOM).css(CSS_DISPLAY,CSS_BLOCK);	
	}
	
	if($(window).scrollTop() <= $(ID_TOP_SCROLL).offset().top)
	{
		$(CLASS_SCROLLER_CLASS_TOP).css(CSS_DISPLAY,CSS_NONE);
	}
	else 
	{
		$(CLASS_SCROLLER_CLASS_TOP).css(CSS_DISPLAY,CSS_BLOCK);	
	}
}

//Scroll to the previous element
function ScrollUp()
{
	var lCurrentScroll = $(window).scrollTop();
	var lToScroll = 0;
	var lPreviousElm = null;
	
	$(CLASS_ELEMENT_TO_SCROLL).each(function(pIndex) {
		if(lCurrentScroll > $(this).offset().top - OFFSET)
		{
			lPreviousElm = $(this);
		}
	});
	
	if(lPreviousElm != null)
	{
		lToScroll = lPreviousElm.offset().top - OFFSET;
	}
	
	Scroll(lToScroll, lCurrentScroll);
}

//Scroll to the next event
function ScrollDown()
{
	var lCurrentScroll = $(window).scrollTop();
	var lToScroll = $(document).height();
	var lPreviousElm = null;
	
	$(CLASS_ELEMENT_TO_SCROLL).each(function(pIndex) {
		if(lPreviousElm == null && lCurrentScroll < $(this).offset().top - OFFSET)
		{
			lPreviousElm = $(this);
		}
	});
	
	if(lPreviousElm != null)
	{
		lToScroll = lPreviousElm.offset().top - OFFSET;
	}
	
	Scroll(lToScroll, lCurrentScroll);
}

//Do the scroll
function Scroll(pTop, pCurrentTop)
{
	$(HTML_BODY).animate({ scrollTop: pTop}, Math.min(MIN_TIME_TO_SCROLL, Math.abs(pTop - pCurrentTop)));
}