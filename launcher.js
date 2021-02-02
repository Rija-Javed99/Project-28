class launcher{
	constructor(body,anchor)
	{
		
		var options={ 
			
			//define body and point with properties
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	
	fly()
	{
		//set launcher null
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			
			//display point and line created
			
			
		}
	}
}
