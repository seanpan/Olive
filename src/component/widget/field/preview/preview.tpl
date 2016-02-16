<div class="field preview" style="<%= obj.parsedStyle %>">
    <a class="text-style7" href="<%=obj.options.data.url%>" target="_blank">
        <img class="previewImage" src="<%=obj.options.data.img%>">
    <span class="previewTitle">
        <span class="previewTitleContent" title="<%=obj.options.data.title%>"><%=obj.options.data.title%></span>
                        <div class="triangle-outer"></div><div class="triangle-inner"></div>
                </span>
    </a>

    <div class="previewBottom">
        <span class="mod-star"><em class="progress" style="width:88.0%"></em><em class="star"></em></span>
        <span class="score"><%=obj.options.data.score%>分</span><span class="study-count"><%=obj.options.data.studyCount%>已学</span>
    </div>
</div>