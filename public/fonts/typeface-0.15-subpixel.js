/*****************************************************************

typeface.js, version 0.15 | typefacejs.neocracy.org

Copyright (c) 2008 - 2009, David Chester davidchester@gmx.net 

Subpixel additions (c) 2011, George Yohng http://yohng.com/

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*****************************************************************/

(function() {

/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * @link   http://www.phpied.com/rgb-color-parser-in-javascript/
 * @license Use it if you like it
 */
function RGBColor(color_string)
{
    this.ok = false;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    for (var key in simple_colors) {
        if (color_string == key) {
            color_string = simple_colors[key];
        }
    }
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }

    // help
    this.getHelpXML = function () {

        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText =
                        'margin: 3px; '
                        + 'border: 1px solid black; '
                        + 'background:' + list_color.toHex() + '; '
                        + 'color:' + list_color.toHex()
                ;
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                    ' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
                );
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);

            } catch(e){}
        }
        return xml;

    }

}


var _typeface_js = {


    snapY: function(y)
    {
        var DELTA = 0.25;

        if (Math.abs(y-Math.round(y))<DELTA)
            y=Math.round(y);
             
        return y;
    },

    colorRed: function(clr)
    {
        var c = new RGBColor(clr);
        c.g=0;
        c.b=0;
        return c.toHex();
    },

    colorGreen: function(clr)
    {
        var c = new RGBColor(clr);
        c.r=0;
        c.b=0;
        return c.toHex();
    },

    colorBlue: function(clr)
    {
        var c = new RGBColor(clr);
        c.r=0;
        c.g=0;
        return c.toHex();
    },


	faces: {},

	loadFace: function(typefaceData) {

		var familyName = typefaceData.familyName.toLowerCase();
		
		if (!this.faces[familyName]) {
			this.faces[familyName] = {};
		}
		if (!this.faces[familyName][typefaceData.cssFontWeight]) {
			this.faces[familyName][typefaceData.cssFontWeight] = {};
		}

		var face = this.faces[familyName][typefaceData.cssFontWeight][typefaceData.cssFontStyle] = typefaceData;
		face.loaded = true;
	},

	log: function(message) {
		
		if (this.quiet) {
			return;
		}
		
		message = "typeface.js: " + message;
		
		if (this.customLogFn) {
			this.customLogFn(message);

		} else if (window.console && window.console.log) {
			window.console.log(message);
		}
		
	},
	
	pixelsFromPoints: function(face, style, points, dimension) {
		var pixels = points * parseInt(style.fontSize) * 72 / (face.resolution * 100);
		if (dimension == 'horizontal' && style.fontStretchPercent) {
			pixels *= style.fontStretchPercent;
		}
		return pixels;
	},

	pointsFromPixels: function(face, style, pixels, dimension) {
		var points = pixels * face.resolution / (parseInt(style.fontSize) * 72 / 100);
		if (dimension == 'horizontal' && style.fontStretchPrecent) {
			points *= style.fontStretchPercent;
		}
		return points;
	},

	cssFontWeightMap: {
		normal: 'normal',
		bold: 'bold',
		400: 'normal',
		700: 'bold'
	},

	cssFontStretchMap: {
		'ultra-condensed': 0.55,
		'extra-condensed': 0.77,
		'condensed': 0.85,
		'semi-condensed': 0.93,
		'normal': 1,
		'semi-expanded': 1.07,
		'expanded': 1.15,
		'extra-expanded': 1.23,
		'ultra-expanded': 1.45,
		'default': 1
	},
	
	fallbackCharacter: '.',

	configure: function(args) {
		var configurableOptionNames = [ 'customLogFn',  'customClassNameRegex', 'customTypefaceElementsList', 'quiet', 'verbose', 'disableSelection' ];
		
		for (var i = 0; i < configurableOptionNames.length; i++) {
			var optionName = configurableOptionNames[i];
			if (args[optionName]) {
				if (optionName == 'customLogFn') {
					if (typeof args[optionName] != 'function') {
						throw "customLogFn is not a function";
					} else {
						this.customLogFn = args.customLogFn;
					}
				} else {
					this[optionName] = args[optionName];
				}
			}
		}
	},

	getTextExtents: function(face, style, text) {
		var extentX = 0;
		var extentY = 0;
		var horizontalAdvance;
	
		var textLength = text.length;
		for (var i = 0; i < textLength; i++) {
			var glyph = face.glyphs[text.charAt(i)] ? face.glyphs[text.charAt(i)] : face.glyphs[this.fallbackCharacter];
			var letterSpacingAdjustment = this.pointsFromPixels(face, style, style.letterSpacing);

			// if we're on the last character, go with the glyph extent if that's more than the horizontal advance
			extentX += i + 1 == textLength ? Math.max(glyph.x_max, glyph.ha) : glyph.ha;
			extentX += letterSpacingAdjustment;

			horizontalAdvance += glyph.ha + letterSpacingAdjustment;
		}
		return { 
			x: extentX, 
			y: extentY,
			ha: horizontalAdvance
			
		};
	},

	pixelsFromCssAmount: function(cssAmount, defaultValue, element) {

		var matches = undefined;

		if (cssAmount == 'normal') {
			return defaultValue;

		} else if (matches = cssAmount.match(/([\-\d+\.]+)px/)) {
			return matches[1];

		} else {
			// thanks to Dean Edwards for this very sneaky way to get IE to convert 
			// relative values to pixel values
			
			var pixelAmount;
			
			var leftInlineStyle = element.style.left;
			var leftRuntimeStyle = element.runtimeStyle.left;

			element.runtimeStyle.left = element.currentStyle.left;

			if (!cssAmount.match(/\d(px|pt)$/)) {
				element.style.left = '1em';
			} else {
				element.style.left = cssAmount || 0;
			}

			pixelAmount = element.style.pixelLeft;
		
			element.style.left = leftInlineStyle;
			element.runtimeStyle.left = leftRuntimeStyle;
			
			return pixelAmount || defaultValue;
		}
	},

	capitalizeText: function(text) {
		return text.replace(/(^|\s)[a-z]/g, function(match) { return match.toUpperCase() } ); 
	},

	getElementStyle: function(e) {
		if (window.getComputedStyle) {
			return window.getComputedStyle(e, '');
		
		} else if (e.currentStyle) {
			return e.currentStyle;
		}
	},

	getRenderedText: function(e) {

		var browserStyle = this.getElementStyle(e.parentNode);

		var inlineStyleAttribute = e.parentNode.getAttribute('style');
		if (inlineStyleAttribute && typeof(inlineStyleAttribute) == 'object') {
			inlineStyleAttribute = inlineStyleAttribute.cssText;
		}

		if (inlineStyleAttribute) {

			var inlineStyleDeclarations = inlineStyleAttribute.split(/\s*\;\s*/);

			var inlineStyle = {};
			for (var i = 0; i < inlineStyleDeclarations.length; i++) {
				var declaration = inlineStyleDeclarations[i];
				var declarationOperands = declaration.split(/\s*\:\s*/);
				inlineStyle[declarationOperands[0]] = declarationOperands[1];
			}
		}

		var style = { 
			color: browserStyle.color, 
			backgroundColor: (browserStyle.backgroundColor == 'transparent')?"#FFFFFF": browserStyle.backgroundColor, 
			fontFamily: browserStyle.fontFamily.split(/\s*,\s*/)[0].replace(/(^"|^'|'$|"$)/g, '').toLowerCase(), 
			fontSize: this.pixelsFromCssAmount(browserStyle.fontSize, 12, e.parentNode),
			fontWeight: this.cssFontWeightMap[browserStyle.fontWeight],
			fontStyle: browserStyle.fontStyle ? browserStyle.fontStyle : 'normal',
			fontStretchPercent: this.cssFontStretchMap[inlineStyle && inlineStyle['font-stretch'] ? inlineStyle['font-stretch'] : 'default'],
			textDecoration: browserStyle.textDecoration,
			lineHeight: this.pixelsFromCssAmount(browserStyle.lineHeight, 'normal', e.parentNode),
			letterSpacing: this.pixelsFromCssAmount(browserStyle.letterSpacing, 0, e.parentNode),
			textTransform: browserStyle.textTransform
		};

		var face;
		if (
			this.faces[style.fontFamily]  
			&& this.faces[style.fontFamily][style.fontWeight]
		) {
			face = this.faces[style.fontFamily][style.fontWeight][style.fontStyle];
		}

		var text = e.nodeValue;
		
		if (
			e.previousSibling 
			&& e.previousSibling.nodeType == 1 
			&& e.previousSibling.tagName != 'BR' 
			&& this.getElementStyle(e.previousSibling).display.match(/inline/)
		) {
			text = text.replace(/^\s+/, ' ');
		} else {
			text = text.replace(/^\s+/, '');
		}
		
		if (
			e.nextSibling 
			&& e.nextSibling.nodeType == 1 
			&& e.nextSibling.tagName != 'BR' 
			&& this.getElementStyle(e.nextSibling).display.match(/inline/)
		) {
			text = text.replace(/\s+$/, ' ');
		} else {
			text = text.replace(/\s+$/, '');
		}
		
		text = text.replace(/\s+/g, ' ');
	
		if (style.textTransform && style.textTransform != 'none') {
			switch (style.textTransform) {
				case 'capitalize':
					text = this.capitalizeText(text);
					break;
				case 'uppercase':
					text = text.toUpperCase();
					break;
				case 'lowercase':
					text = text.toLowerCase();
					break;
			}
		}

		if (!face) {
			var excerptLength = 12;
			var textExcerpt = text.substring(0, excerptLength);
			if (text.length > excerptLength) {
				textExcerpt += '...';
			}
		
			var fontDescription = style.fontFamily;
			if (style.fontWeight != 'normal') fontDescription += ' ' + style.fontWeight;
			if (style.fontStyle != 'normal') fontDescription += ' ' + style.fontStyle;
		
			this.log("couldn't find typeface font: " + fontDescription + ' for text "' + textExcerpt + '"');
			return;
		}
	
		var words = text.split(/\b(?=\w)/);

		var containerSpan = document.createElement('span');
		containerSpan.className = 'typeface-js-vector-container';
		
		var wordsLength = words.length;
		for (var i = 0; i < wordsLength; i++) {
			var word = words[i];
			
			var vector = this.renderWord(face, style, word);
			
			if (vector) {
				containerSpan.appendChild(vector.element);

				if (!this.disableSelection) {
					var selectableSpan = document.createElement('span');
					selectableSpan.className = 'typeface-js-selected-text';

					var wordNode = document.createTextNode(word);
					selectableSpan.appendChild(wordNode);

					if (this.vectorBackend != 'vml') {
						selectableSpan.style.marginLeft = -1 * (vector.width + 1) + 'px';
					}
					selectableSpan.targetWidth = vector.width;
					//selectableSpan.style.lineHeight = 1 + 'px';

					if (this.vectorBackend == 'vml') {
						vector.element.appendChild(selectableSpan);
					} else {
						containerSpan.appendChild(selectableSpan);
					}
				}
			}
		}

		return containerSpan;
	},

	renderDocument: function(callback) { 
		
		if (!callback)
			callback = function(e) { e.style.visibility = 'visible' };

		var elements = document.getElementsByTagName('*');
		
		var elementsLength = elements.length;
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].className.match(/(^|\s)typeface-js(\s|$)/) || elements[i].tagName.match(/^(H1|H2|H3|H4|H5|H6)$/)) {
				this.replaceText(elements[i]);
				if (typeof callback == 'function') {
					callback(elements[i]);
				}
			}
		}

		if (this.vectorBackend == 'vml') {
			// lamely work around IE's quirky leaving off final dynamic shapes
			var dummyShape = document.createElement('v:shape');
			dummyShape.style.display = 'none';
			document.body.appendChild(dummyShape);
		}
	},

	replaceText: function(e) {

		var childNodes = [];
		var childNodesLength = e.childNodes.length;

		for (var i = 0; i < childNodesLength; i++) {
			this.replaceText(e.childNodes[i]);
		}

		if (e.nodeType == 3 && e.nodeValue.match(/\S/)) {
			var parentNode = e.parentNode;

			if (parentNode.className == 'typeface-js-selected-text') {
				return;
			}

			var renderedText = this.getRenderedText(e);
			
			if (
				parentNode.tagName == 'A' 
				&& this.vectorBackend == 'vml'
				&& this.getElementStyle(parentNode).display == 'inline'
			) {
				// something of a hack, use inline-block to get IE to accept clicks in whitespace regions
				parentNode.style.display = 'inline-block';
				parentNode.style.cursor = 'pointer';
			}

			if (this.getElementStyle(parentNode).display == 'inline') {
				parentNode.style.display = 'inline-block';
			}

			if (renderedText) {	
				if (parentNode.replaceChild) {
					parentNode.replaceChild(renderedText, e);
				} else {
					parentNode.insertBefore(renderedText, e);
					parentNode.removeChild(e);
				}
				if (this.vectorBackend == 'vml') {
					renderedText.innerHTML = renderedText.innerHTML;
				}

				var childNodesLength = renderedText.childNodes.length
				for (var i; i < childNodesLength; i++) {
					
					// do our best to line up selectable text with rendered text

					var e = renderedText.childNodes[i];
					if (e.hasChildNodes() && !e.targetWidth) {
						e = e.childNodes[0];
					}
					
					if (e && e.targetWidth) {
						var letterSpacingCount = e.innerHTML.length;
						var wordSpaceDelta = e.targetWidth - e.offsetWidth;
						var letterSpacing = wordSpaceDelta / (letterSpacingCount || 1);

						if (this.vectorBackend == 'vml') {
							letterSpacing = Math.ceil(letterSpacing);
						}

						e.style.letterSpacing = letterSpacing + 'px';
						e.style.width = e.targetWidth + 'px';
					}
				}
			}
		}
	},

	applyElementVerticalMetrics: function(face, style, e) {

		if (style.lineHeight == 'normal') {
			style.lineHeight = this.pixelsFromPoints(face, style, face.lineHeight);
		}

		var cssLineHeightAdjustment = style.lineHeight - this.pixelsFromPoints(face, style, face.lineHeight);

		e.style.marginTop = Math.round( cssLineHeightAdjustment / 2 ) + 'px';
		e.style.marginBottom = Math.round( cssLineHeightAdjustment / 2) + 'px';
	
	},

	vectorBackends: {

		canvas: {

			_initializeSurface: function(face, style, text) {

				var extents = this.getTextExtents(face, style, text);

				var canvas = document.createElement('canvas');
				if (this.disableSelection) {
					canvas.innerHTML = text;
				}

				canvas.height = Math.round(this.pixelsFromPoints(face, style, face.lineHeight));
				canvas.width = Math.round(this.pixelsFromPoints(face, style, extents.x, 'horizontal'));
	
				this.applyElementVerticalMetrics(face, style, canvas);

				if (extents.x > extents.ha) 
					canvas.style.marginRight = Math.round(this.pixelsFromPoints(face, style, extents.x - extents.ha, 'horizontal')) + 'px';

				var ctx = canvas.getContext('2d');
				var pointScale = this.pixelsFromPoints(face, style, 1);

				ctx.fillStyle = style.color;

				return { context: ctx, canvas: canvas };
			},

			_renderGlyph: function(ctx, face, char, style) {

				var glyph = face.glyphs[char];

				var pointScale = this.pixelsFromPoints(face, style, 1);
				var scaleX=(pointScale*style.fontStretchPercent);
				var scaleY=-(pointScale);
				var shiftX=0;
				var shiftY=(-1*face.ascender)*scaleY;

				shiftY=parseInt(shiftY);

				if (!glyph) {
					//this.log.error("glyph not defined: " + char);
					return this.renderGlyph(ctx, face, this.fallbackCharacter, style);
				}

				if (glyph.o) {

					var outline;
					if (glyph.cached_outline) {
						outline = glyph.cached_outline;
					} else {
						outline = glyph.o.split(' ');
						glyph.cached_outline = outline;
					}

					var outlineLength = outline.length;
					for (var i = 0; i < outlineLength; ) {

						var action = outline[i++];

						switch(action) {
							case 'm':
								ctx.moveTo(outline[i++]*scaleX+shiftX, this.snapY(outline[i++]*scaleY+shiftY));
								break;
							case 'l':
								ctx.lineTo(outline[i++]*scaleX+shiftX, this.snapY(outline[i++]*scaleY+shiftY));
								break;

							case 'q':
								var cpx = outline[i++];
								var cpy = outline[i++];
								ctx.quadraticCurveTo(outline[i++]*scaleX+shiftX, this.snapY(outline[i++]*scaleY+shiftY), 
								                              cpx*scaleX+shiftX, this.snapY(cpy*scaleY+shiftY));
								break;

							case 'b':
								var x = outline[i++];
								var y = outline[i++];
								ctx.bezierCurveTo(outline[i++]*scaleX+shiftX, this.snapY(outline[i++]*scaleY+shiftY), 
								                  outline[i++]*scaleX+shiftX, this.snapY(outline[i++]*scaleY+shiftY), 
								                  x*scaleX+shiftX, this.snapY(y*scaleY+shiftY));
								break;
						}
					}					
				}
				if (glyph.ha) {
					var letterSpacingPoints = 
						style.letterSpacing && style.letterSpacing != 'normal' ? 
							this.pointsFromPixels(face, style, style.letterSpacing) : 
							0;

					ctx.translate((glyph.ha + letterSpacingPoints)*scaleX, 0);
				}
			},

			_renderWord: function(face, style, text) {

				var surface0 = this.initializeSurface(face, style, text);

				var surf = [this.initializeSurface(face, style, text),
				            this.initializeSurface(face, style, text),
				            this.initializeSurface(face, style, text)];



//				var bgcolors=["#0000FF","#00FF00","#FF0000"];

				var bgcolors=[this.colorBlue(style.backgroundColor),this.colorGreen(style.backgroundColor),this.colorRed(style.backgroundColor)];
				var colors=[this.colorBlue(style.color),this.colorGreen(style.color),this.colorRed(style.color)];

			    surface0.fillStyle="#000000";
			    //surface0.context.fillRect(0,0,surface0.canvas.width,surface0.canvas.height);
			    surface0.context.beginPath();

				for(var si=0;si<3;si++)
				{
				    var surface=surf[si];

    				surface.context.beginPath();

				    surface.context.fillStyle=bgcolors[si];
				    surface.context.fillRect(0,0,surface.canvas.width,surface.canvas.height);

    				surface.context.beginPath();

    				if (style.textDecoration == 'underline') 
                        surface.context.save();

    				var chars = text.split('');
    				var charsLength = chars.length;

    				surface.context.translate(0.33*si-0.33,0.0);

    				for (var i = 0; i < charsLength; i++) {
    					this.renderGlyph(surface.context, face, chars[i], style);
    				}

    				surface.context.fillStyle = colors[si];
    				surface.context.fill();

    				if (style.textDecoration == 'underline') {

    					surface.context.beginPath();
    					surface.context.moveTo(0, face.underlinePosition);
    					surface.context.restore();
    					surface.context.lineTo(0, face.underlinePosition);
    					surface.context.strokeStyle = style.color;
    					surface.context.lineWidth = face.underlineThickness;
    					surface.context.stroke();
    				}

    				surface0.context.globalCompositeOperation='lighter';
    				surface0.context.drawImage(surface.canvas,0,0);
				}

				return { element: surface0.canvas, width: Math.floor(surface0.canvas.width) };
			
			}
		},

		vml: {

			_initializeSurface: function(face, style, text) {

				var shape = document.createElement('v:shape');

				var extents = this.getTextExtents(face, style, text);
				
				shape.style.width = shape.style.height = style.fontSize + 'px'; 
				shape.style.marginLeft = '-1px'; // this seems suspect...

				if (extents.x > extents.ha) {
					shape.style.marginRight = this.pixelsFromPoints(face, style, extents.x - extents.ha, 'horizontal') + 'px';
				}

				this.applyElementVerticalMetrics(face, style, shape);

				var resolutionScale = face.resolution * 100 / 72;
				shape.coordsize = (resolutionScale / style.fontStretchPercent) + "," + resolutionScale;
				
				shape.coordorigin = '0,' + face.ascender;
				shape.style.flip = 'y';

				shape.fillColor = style.color;
				shape.stroked = false;

				shape.path = 'hh m 0,' + face.ascender + ' l 0,' + face.descender + ' ';

				return shape;
			},

			_renderGlyph: function(shape, face, char, offsetX, style, vmlSegments) {

				var glyph = face.glyphs[char];

				if (!glyph) {
					this.log("glyph not defined: " + char);
					this.renderGlyph(shape, face, this.fallbackCharacter, offsetX, style);
					return;
				}
				
				vmlSegments.push('m');

				if (glyph.o) {
					
					var outline, outlineLength;
					
					if (glyph.cached_outline) {
						outline = glyph.cached_outline;
						outlineLength = outline.length;
					} else {
						outline = glyph.o.split(' ');
						outlineLength = outline.length;

						for (var i = 0; i < outlineLength;) {

							switch(outline[i++]) {
								case 'q':
									outline[i] = Math.round(outline[i++]);
									outline[i] = Math.round(outline[i++]);
								case 'm':
								case 'l':
									outline[i] = Math.round(outline[i++]);
									outline[i] = Math.round(outline[i++]);
									break;
							} 
						}	

						glyph.cached_outline = outline;
					}

					var prevX, prevY;
					
					for (var i = 0; i < outlineLength;) {

						var action = outline[i++];

						var x = Math.round(outline[i++]) + offsetX;
						var y = Math.round(outline[i++]);
	
						switch(action) {
							case 'm':
								vmlSegments.push('xm ', x, ',', y);
								break;
	
							case 'l':
								vmlSegments.push('l ', x, ',', y);
								break;

							case 'q':
								var cpx = outline[i++] + offsetX;
								var cpy = outline[i++];

								var cp1x = Math.round(prevX + 2.0 / 3.0 * (cpx - prevX));
								var cp1y = Math.round(prevY + 2.0 / 3.0 * (cpy - prevY));

								var cp2x = Math.round(cp1x + (x - prevX) / 3.0);
								var cp2y = Math.round(cp1y + (y - prevY) / 3.0);
								
								vmlSegments.push('c ', cp1x, ',', cp1y, ',', cp2x, ',', cp2y, ',', x, ',', y);
								break;

							case 'b':
								var cp1x = Math.round(outline[i++]) + offsetX;
								var cp1y = outline[i++];

								var cp2x = Math.round(outline[i++]) + offsetX;
								var cp2y = outline[i++];

								vmlSegments.push('c ', cp1x, ',', cp1y, ',', cp2x, ',', cp2y, ',', x, ',', y);
								break;
						}

						prevX = x;
						prevY = y;
					}					
				}

				vmlSegments.push('x e');
				return vmlSegments;
			},

			_renderWord: function(face, style, text) {
				var offsetX = 0;
				var shape = this.initializeSurface(face, style, text);
		
				var letterSpacingPoints = 
					style.letterSpacing && style.letterSpacing != 'normal' ? 
						this.pointsFromPixels(face, style, style.letterSpacing) : 
						0;

				letterSpacingPoints = Math.round(letterSpacingPoints);
				var chars = text.split('');
				var vmlSegments = [];
				for (var i = 0; i < chars.length; i++) {
					var char = chars[i];
					vmlSegments = this.renderGlyph(shape, face, char, offsetX, style, vmlSegments);
					offsetX += face.glyphs[char].ha + letterSpacingPoints ;	
				}

				if (style.textDecoration == 'underline') {
					var posY = face.underlinePosition - (face.underlineThickness / 2);
					vmlSegments.push('xm ', 0, ',', posY);
					vmlSegments.push('l ', offsetX, ',', posY);
					vmlSegments.push('l ', offsetX, ',', posY + face.underlineThickness);
					vmlSegments.push('l ', 0, ',', posY + face.underlineThickness);
					vmlSegments.push('l ', 0, ',', posY);
					vmlSegments.push('x e');
				}

				// make sure to preserve trailing whitespace
				shape.path += vmlSegments.join('') + 'm ' + offsetX + ' 0 l ' + offsetX + ' ' + face.ascender;
				
				return {
					element: shape,
					width: Math.floor(this.pixelsFromPoints(face, style, offsetX, 'horizontal'))
				};
			}

		}

	},

	setVectorBackend: function(backend) {

		this.vectorBackend = backend;
		var backendFunctions = ['renderWord', 'initializeSurface', 'renderGlyph'];

		for (var i = 0; i < backendFunctions.length; i++) {
			var backendFunction = backendFunctions[i];
			this[backendFunction] = this.vectorBackends[backend]['_' + backendFunction];
		}
	},
	
	initialize: function() {

		// quit if this function has already been called
		if (arguments.callee.done) return; 
		
		// flag this function so we don't do the same thing twice
		arguments.callee.done = true;

		// kill the timer
		if (window._typefaceTimer) clearInterval(_typefaceTimer);

		this.renderDocument( function(e) { e.style.visibility = 'visible' } );

	}
	
};

// IE won't accept real selectors...
var typefaceSelectors = ['.typeface-js', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

if (document.createStyleSheet) { 

	var styleSheet = document.createStyleSheet();
	for (var i = 0; i < typefaceSelectors.length; i++) {
		var selector = typefaceSelectors[i];
		styleSheet.addRule(selector, 'visibility: hidden');
	}

	styleSheet.addRule(
		'.typeface-js-selected-text', 
		'-ms-filter: \
			"Chroma(color=black) \
			progid:DXImageTransform.Microsoft.MaskFilter(Color=white) \
			progid:DXImageTransform.Microsoft.MaskFilter(Color=blue) \
			alpha(opacity=30)" !important; \
		color: black; \
		font-family: Modern; \
		position: absolute; \
		white-space: pre; \
		filter: alpha(opacity=0) !important;'
	);

	styleSheet.addRule(
		'.typeface-js-vector-container',
		'position: relative'
	);

} else if (document.styleSheets) {

	if (!document.styleSheets.length) { (function() {
		// create a stylesheet if we need to
		var styleSheet = document.createElement('style');
		styleSheet.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(styleSheet);
	})() }

	var styleSheet = document.styleSheets[0];
	document.styleSheets[0].insertRule(typefaceSelectors.join(',') + ' { visibility: hidden; }', styleSheet.cssRules.length); 

	document.styleSheets[0].insertRule(
		'.typeface-js-selected-text { \
			color: rgba(128, 128, 128, 0); \
			opacity: 0.30; \
			position: absolute; \
			font-family: Arial, sans-serif; \
			white-space: pre \
		}', 
		styleSheet.cssRules.length
	);

	try { 
		// set selection style for Mozilla / Firefox
		document.styleSheets[0].insertRule(
			'.typeface-js-selected-text::-moz-selection { background: blue; }', 
			styleSheet.cssRules.length
		); 

	} catch(e) {};

	try { 
		// set styles for browsers with CSS3 selectors (Safari, Chrome)
		document.styleSheets[0].insertRule(
			'.typeface-js-selected-text::selection { background: blue; }', 
			styleSheet.cssRules.length
		); 

	} catch(e) {};

	// most unfortunately, sniff for WebKit's quirky selection behavior
	if (/WebKit/i.test(navigator.userAgent)) {
		document.styleSheets[0].insertRule(
			'.typeface-js-vector-container { position: relative }',
			styleSheet.cssRules.length
		);
	}

}

var backend =  window.CanvasRenderingContext2D || document.createElement('canvas').getContext ? 'canvas' : !!(window.attachEvent && !window.opera) ? 'vml' : null;

if (backend == 'vml') {

	document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML");

	var styleSheet = document.createStyleSheet();
	styleSheet.addRule('v\\:shape', "display: inline-block;");
}

_typeface_js.setVectorBackend(backend);
window._typeface_js = _typeface_js;
	
if (/WebKit/i.test(navigator.userAgent)) {

	var _typefaceTimer = setInterval(function() {
		if (/loaded|complete/.test(document.readyState)) {
			_typeface_js.initialize(); 
		}
	}, 10);
}

if (document.addEventListener) {
	window.addEventListener('DOMContentLoaded', function() { _typeface_js.initialize() }, false);
} 

/*@cc_on @*/
/*@if (@_win32)

document.write("<script id=__ie_onload_typeface defer src=//:><\/script>");
var script = document.getElementById("__ie_onload_typeface");
script.onreadystatechange = function() {
	if (this.readyState == "complete") {
		_typeface_js.initialize(); 
	}
};

/*@end @*/

try { console.log('initializing typeface.js') } catch(e) {};

})();
