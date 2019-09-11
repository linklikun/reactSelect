This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# 需求：
1 级联菜单   
2 点击添加按钮，增加一个同样的菜单（数据不同），增加的菜单位置是点击菜单的下面  
3 实现数据的暂存和不同步，三个级联菜单可以选择不同的值且不同步
## 思考：
### 第一次
1 级联菜单实现需要将第一个菜单数据遍历，然后在此基础上将数据（第一次选择的数据）传递到state（思考暂存数据结构。。。）  
2 第二个选择器的数据要根据第一个选择器的数据进行判断，也就是说要将第一个选择器传回的数据在获取到render中，在render中使用判断state中的数据是否改变，然后在选择渲染对应数据。（思考数据源。。。）  
3 同时第二个选择器需要将获取的数据暂存，同样上传到state（数据结构）  
4 第一次数据源：如果需要将第一次获取的数据再次对比则需要和数据源中的数据对比，那么需要将state的数据与数据源作对比（遍历数据源第一选择器数据与state的数据对比），所以数据源做成[{}]数组对象。对象包含的属性再做成数组。这样可以将  
    str(item)=>item.option===state.firstDate  
5 然后再将子数组遍历输出  
6 数据结构：如果是一个下拉列表，那么数据可以定义为单个对象，但是后面要增加多个列表，那么需要将对象变为数组对象，并且可以将数据暂存，然后在通过添加按钮时在push新的对象，然后在render是靠state的value来控制数据下标不被污染
