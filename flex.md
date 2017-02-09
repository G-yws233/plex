移动端布局

1，百分比布局（栅格）
2，rem布局
3，flex布局

传统布局== display + float + position（盒模型）
任何一个容器都可以指定为flex布局。
 display: flex / inline-flex;
 主轴--main axis
 交叉轴--cross axis
 主轴起点--main start
 主轴终点--main end 
 * 注意：设为Flex布局以后，子元素的float、clear、vertical-align属性失效。



##  容器的属性
flex-direction 属性决定主轴的方向（即项目的排列方向）
 	- row （默认从左到右）
 	- row-reverse （从右到左）
 	- column （默认从上到下）
 	- column-reverse （默认从下到上）


flex-wrap 属性决定项目是否换行
	- nowarp 不换行（宽度）
	- warp   自动换行（第一行在上方）
	- warp-reverse  自动换行（第一行在下方）


flex-flow 是上面两个属性的总写
	- row / row-reverse / column / column-reverse / nowarp / warp / warp-reverse


justify-content属性定义项目在主轴上的对齐方式
	- justify-start  左对齐
	- justify-end    右对齐
	- center         居中对齐
	- space-between  两端对齐（项目之间的间隔相等）
	- space-around   两侧相等对齐（每个项目两侧的间隔相等，且中间间隔是两侧间隔的两倍）


align-items属性定义交叉轴的对齐方式
	- stretch       （默认值）
	- flex-start     交叉轴的起点对齐
	- flex-end	     交叉轴的起点对齐
	-center          交叉轴的中点对齐
	-baseline		 项目的第一行文字的基线对齐


align-content属性定义了多根轴线的对齐方式（如果项目只有一根轴线该属性失效）
	- flex-start 	  与交叉轴的起点对齐
	- flex-end   	  与交叉轴的终点对齐
	- center     	  与交叉轴的中点对齐
	- space-between   与交叉轴的两端对齐
	- space-around	  与交叉轴的两测对齐
	- stretch         轴线占满整个容器



##项目的属性

order 属性定义项目的排列顺序。数值越小，排列越靠前（默认为0）
	值可以为负值（只接受整数）

flex-grow属性定义项目的放大比列，默认为0，即如果存在剩余空间，也不放大

flex-shrink属性定义项目的缩小比列，默认为1，即如果空间不足，则会缩小
	如果为1 则该项目不缩小，其他项目缩小  负值无效

flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
	浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
	flex-basis:<size> | auto

flex属性是上面三个的简写 默认为 0 1 auto
	auto   (1 1 auto)
	none   (0 0 auto)




align-self属性允许单个项目有与其他项目不一样的对齐方式,可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

align-self: auto | flex-start | flex-end | center | baseline | stretch;

