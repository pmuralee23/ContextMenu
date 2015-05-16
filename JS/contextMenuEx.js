function createContextMenu(){
	var ContextMenuDiv = document.getElementById('menu'),
		Base;
	var that = this;
	console.log(this);
	that.displayMenu = function(e)
	{
		Base = document.getElementById('userTable');

		if(e.target.className == 'heading'){
			return false;
		}
	    e = e ? e : window.event;	 
	    e.preventDefault();   

	    var xLeft = e.clientX;
		if(xLeft + ContextMenuDiv.offsetWidth > Base.offsetWidth)
			xLeft = Base.offsetWidth - ContextMenuDiv.offsetWidth;
		
		var yTop = e.clientY;
		if(yTop + ContextMenuDiv.offsetHeight > Base.clientHeight)
			yTop = Base.clientHeight - ContextMenuDiv.offsetHeight;	
		
	    ContextMenuDiv.style.visibility = 'hidden';
	    ContextMenuDiv.style.left = xLeft + 'px';
        ContextMenuDiv.style.top = yTop + 'px';
        ContextMenuDiv.style.visibility = 'visible';
		// e.currentTarget.addEventListener('click', this.chooseAction, true);
        console.log(this);	

        this.hideMenu()
        	// rowNum: e.currentTarget.rowIndex
        
        return false;
	}	
	that.hideMenu = function(){
		 ContextMenuDiv.style.visibility = 'hidden';
	}
	that.mouseOver = function(e){
		var x = e.target;
		x.style.backgroundColor = '#F00';
	}

	that.mouseOut = function(e){
		var x = e.target;
		x.style.backgroundColor = '#ccc';
	}

	this.chooseAction = function(tmp){
		var action = tmp.rowNum;
		console.log(action);
		switch(action)
        {
            case 'edit':
                alert('edit: ');
                break;
            case 'remove':
                alert('remove: ');
                break;
            case 'sort':
                alert('sort: ');
                break;
            case 'deactivate':
               alert('deactivate: ');
               break;
        }
	};
	this.usersData = {users: [ { 
                firstName: "John", 
                lastName: "Doe",
                email: "john@examle.com",
                phone: "9876543210",
                state:'Active'
            }, { 
                firstName: "William", 
                lastName: "Donsre",
                email: "wil@examle.com",
                phone: "9876543210",
                state:'Active'
            }, { 
                firstName: "Micheal", 
                lastName: "Patric",
                email: "micheal@example.com",
                phone: "7654379920",
                state:'Diactive'
            },{ 
                firstName: "Oman", 
                lastName: "Donsre",
                email: "oman@examle.com",
                phone: "8989898980",
                state:'Active'
            },{ 
                firstName: "Simon", 
                lastName: "Tesla",
                email: "simon@example.com",
                phone: "",
                state:'Active'
            }]
        };
	this.getData = function(){
		return this.usersData;
	};
	this.getDataAtIndex = function(index){

	};
	this.buildTable = function(){
		var source = $("#some-template").html(); 

        Handlebars.registerHelper("addClass", function() {
            return this.state == 'Diactive' ? 'deactive' : '';
        });

        var template = Handlebars.compile(source); 

        var data = this.getData();

        $('#tab').append(template(data));
	}
}