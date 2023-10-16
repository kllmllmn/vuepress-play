## ref

- ref  深层次

- isRef

- shallowRef  浅层次  一个方法中不能同时对ref和shallowRef数据做更改，因为ref会调用triggerRef做视图的强制更新

  ```js
  const msg1 = ref({ name: 1 });
  const msg2 = shallowRef({ name: 2 });
  const change = () => {
    // 对msg1做更改，msg2的更改也会更新
    msg1.value.name = "test1";
    msg2.value.name = "test2";
  };
  ```

- triggerRef  强制更新

- customRef  自定义ref 浅层的

## reactive

- reactive 支持引用类型 Array Object Map Set

- reactive proxy 不能直接赋值 否则破坏响应式对象，数组可以使用push 加解构  或  把数组作为一个属性

  ```js
  const list=reactive([])
  list.push([...res])
  // 或
  const list=reactive({
      arr:[]
  })
  list.arr=res
  ```

- readonly readonly包裹reactive proxy 变成只读

  ```js
  const list=reactive([])
  const read=readonly(list)
  对read无法修改，但对list修改会影响到read
  ```

- shallowReactive 
- isReadonly

## to

- toRef toRef([对象名],[键名])  将对应的键变成ref形式，

  只能修改响应式对象的值，非响应式视图不变

- toRefs 返回对象的所有键都变为ref对象的对象

- toRaw 包裹一个响应式数据，使之变成原始对象/数据

## computed

## watch

- ```js
  watch(refImpl,(newVal,oldValue)=>{
  	console.log(newVal,oldVal)
  })
  ```

- watchEffect 立即监听，只监听用到的响应式数据
- `watchEffect(()=>{console.log(refImpl.value)})`

## 生命周期

- setup onBeforeMount onMounted onBeforeUpdate onUpdated onBeforeUnmount onUnmounted

## less

- css reset 初始化  vite只需安装less 不用安装less-loader了

- &  取父类的名称

  ```css
  .layout{
      height:100px;
      &-right{  // 匹配 layout-right
          width:100%;
      }
  }
  ```

## 父子组件传参

- defineProps  

  ```js
  const props = defineProps({
  		title: String,
  		info: String,
  		author: String,
  	});// 对象形式声明 props
  	// 等价于以 字符串数组声明 props
  	//const props = defineProps(['title', 'info', 'author']);
  	// 如果在setup中使用则直接 props.title
  ```

  

- defineEmits

- defineExpose

## Map 对象

```js
let map = new Map();
let item = {name: '惠芬儿'};
map.set(item, [1, 2, 3]); // 存储

map.get(item)  //[1, 2, 3] // 获取
map.has(item)  //true // 判断是否存在
map.delete(item)  //true  // 删除
map.has(item)  //false

// 还有另一种设置方式，通过数组来设置
let map = new Map([
    ['first', 123],
    ['second', 456]
]);

map.get('first')   //123
map.get('seconf')  //456

// 注意：不能通过以下方式设置。

let wrongMap = new Map()
wrongMap['bla'] = 'blaa'
wrongMap['bla2'] = 'blaaa2'

console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }

wrongMap.has('bla')    // false
wrongMap.delete('bla') // false
console.log(wrongMap)  // Map { bla: 'blaa', bla2: 'blaaa2' }
//Map的键值对都是按照顺序来添加的,是有序的----------
```

