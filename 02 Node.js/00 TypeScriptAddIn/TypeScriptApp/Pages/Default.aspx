<%-- The following 4 lines are ASP.NET directives needed when using SharePoint components --%>

<%@ Page Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" MasterPageFile="~masterurl/default.master" Language="C#" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%-- The markup and script in the following Content element will be placed in the <head> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    <script type="text/javascript" src="../Scripts/jquery-1.9.1.min.js"></script>
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false"/>
    <meta name="WebPartPageExpansion" content="full"/>

    <!-- Add your CSS styles to the following file -->
    <link rel="Stylesheet" type="text/css" href="../Content/App.css"/>

    <!-- Add your JavaScript to the following file -->
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <script type="text/javascript" src="../Scripts/Demo.js"></script>
</asp:Content>

<%-- The markup in the following Content element will be placed in the TitleArea of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server">
    SharePoint & TypeScript
</asp:Content>

<%-- The markup and script in the following Content element will be placed in the <body> of the page --%>
<asp:Content ContentPlaceHolderID="PlaceHolderMain" runat="server">

    <div>
        <ul>
            <li>
                <a href="javascript:basicVariables()">Basic Variables</a>
            </li>
            <li>
                <a href="javascript:useLetConst()">Let & Const</a>
            </li>
            <li>
                <a href="javascript:stringFunctions()">String Functions</a>
            </li>
            <li>
                <a href="javascript:useEnums()">Enums</a>
            </li>
            <li>
                <a href="javascript:useVoidAny()">Void and Any</a>
            </li>
            <li>
                <a href="javascript:introArrays()">Arrays</a>
            </li>
            <li>
                <a href="javascript:arrayHelpers()">Array Helpers</a>
            </li>
        </ul>
    </div>

    <div>
        <ul>
            <li>
                <a href="javascript:objectsBasics()">Object Basics</a>
            </li>
            <li>
                <a href="javascript:enhancedObjectLiterals()">Enhanced Obj Literals</a>
            </li>
            <li>
                <a href="javascript:destructuring()">Destructurings</a>
            </li>
            <li>
                <a href="javascript:restParams()">Rest Param</a>
            </li>
            <li>
                <a href="javascript:spreadOperator()">Spread Operator</a>
            </li>
            <li>
                <a href="javascript:valref()">Parameter Passing Ref / Val</a>
            </li>
        </ul>
    </div>
    <div>
        <ul>
            <li>
                <a href="javascript:basicClasses()">Basic Classes</a>
            </li>
            <li>
                <a href="javascript:classesConstructor()">Constructor</a>
            </li>
            <li>
                <a href="javascript:getSet()">get / set</a>
            </li>
            <li>
                <a href="javascript:inheritance()">Inheritance</a>
            </li>
            <li>
                <a href="javascript:staticProperties()">Static Properties</a>
            </li>
            <li>
                <a href="javascript:interfacesBasics()">Interfaces Basics</a>
            </li>
            <li>
                <a href="javascript:interfacesNullability()">Interfaces Nullability</a>
            </li>
            <li>
                <a href="javascript:interfacesObjectLiterals()">Object Literals</a>
            </li>
        </ul>
    </div>
    <div>
        <ul>
            <li>
                <a href="javascript:interfacesFunctions()">Interfaces and Functions</a>
            </li>
            <li>
                <a href="javascript:typedFunctions()">Typed Functions</a>
            </li>
            <li>
                <a href="javascript:functionParameters()">Parameters</a>
            </li>
            <li>
                <a href="javascript:arrowFunctions()">Arrow Functions</a>
            </li>
            <li>
                <a href="javascript:genericsBasics()">Generic Basics</a>
            </li>
            <li>
                <a href="javascript:genericClassesInterfaces()">Generic Classes & Interfaces</a>
            </li>
            <li>
                <a href="javascript:genericConstraints()">Generic Constraints</a>
            </li>
        </ul>
    </div>
    <div>
        <ul>
            <li>
                <a href="javascript:usingPromises()">Using Promises</a>
            </li>
            <li>
                <a href="javascript:usingFetch()">Using Fetch</a>
            </li>
            <li>
                <a href="javascript:usingFetchAwait()">Using Fetch Await</a>
            </li>
            <li>
                <a href="javascript:postFetch()">Post Fetch</a>
            </li>
            <li>
                <a href="javascript:loadNews()">Consuming a News Service</a>
            </li>
        </ul>
    </div>


</asp:Content>