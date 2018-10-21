import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import '@webcomponents/custom-elements/src/native-shim';
import 'core-js/es7/reflect';
export interface IHelloPnPjsGraphWebPartProps {
    description: string;
}
export default class HelloPnPjsGraphWebPart extends BaseClientSideWebPart<IHelloPnPjsGraphWebPartProps> {
    render(): void;
    onInit(): Promise<void>;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
