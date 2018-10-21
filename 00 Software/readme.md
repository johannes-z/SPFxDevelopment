## CKS Dev

Patched File included in Folder

### CKSDev Installation

- Install CKSDev, answer warning with "yes"
- Modifify devenv.exe.config located in: C:\Program Files (x86)\Microsoft Visual Studio\2017\Enterprise\Common7\IDE
- Change Assembly Binding

```
<dependentAssembly>
    <assemblyIdentity name="Microsoft.VisualStudio.SharePoint" publicKeyToken="b03f5f7f11d50a3a" culture="neutral"/>
    <!--bindingRedirect oldVersion="10.0.0.0-14.0.0.0" newVersion="14.0.0.0"/-->
    <bindingRedirect oldVersion="10.0.0.0-14.0.0.0" newVersion="15.0.0.0"/>
</dependentAssembly>
```

## Postman

[Postman](https://www.getpostman.com/)

Set Auth to NTLM & add Header:

```
Accept: application/json
```

For easy O365 Auth install [Postman Interceptor](https://chrome.google.com/webstore/detail/postman-interceptor/aicmkgpgakddgnaphhhpliifpcfhicfo?hl=en)

## Sharepoint Client Browser

https://github.com/bramdejager/spcb

## SPRemote API Explorer

https://marketplace.visualstudio.com/items?itemName=SteveCurranMVP.SPRemoteAPIExplorer

## Git Gnome

Visualizes Git Branches

http://ftp.gnome.org/pub/GNOME/binaries/win64/gitg/
