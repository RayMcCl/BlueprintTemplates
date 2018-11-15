import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class {{pascalCase name}} extends Vue {
	
	// #region [ Props ]

	@Prop({ default: 'Hello World', type: String }) private msg!: string;

	// #endregion

	// #region [ Lifecycle ]

	mounted () {
		
	}

	// #endregion

	//#region [GetSet]

	
	
	// #endregion
	
	// #region [ Methods ]
	
	greet () {
		console.log('Hello World');
	}

	// #endregion
	
}