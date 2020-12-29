class MyArray {

	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		if (this.length > 0) {
			return data[index];
		}
	}

	push(val) {
		//add item to the end of the array
		this.data[this.length] = val;
		this.length++;

	}

	pop() {
		//remove the last item
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;

		return lastItem;
	}

	delete(index) {
		//to delete item inside an array you need to shift the items [1,2,3,4] => [2,3,4]
		const item = this.data[index];
		this.shiftItem(index);
		return item;
	}

	shiftItem(index) {
		
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}

		delete this.data[this.length - 1];
		this.length--;
	}

	search(item){
		for(let i=0; i < this.length; i++){
			if(this.data[i] == item){
				return "Found at index: " + i;
				break;
			}
		}
		return "Not Found";
	}
}

const test = new MyArray();
test.push('hi');
test.push('you');
test.push('thank');
test.push('a');
test.push('!');
//console.log("before delete");
//console.log(test);
//test.delete(2);
//console.log("after delete");
//console.log(test);
console.log(test.search('!'));