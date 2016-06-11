walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bGuys\b/g, "People");
  v = v.replace(/\bguys\b/g, "people");
	v = v.replace(/\bThe guys\b/g, "The people");
	v = v.replace(/\bthe guys\b/g, "the people");
	v = v.replace(/\bChaps\b/g, "People");
  v = v.replace(/\bchaps\b/g, "people");
	v = v.replace(/\bThe chaps\b/g, "The chaps");
	v = v.replace(/\bthe chaps\b/g, "the chaps");
	
	textNode.nodeValue = v;
}


