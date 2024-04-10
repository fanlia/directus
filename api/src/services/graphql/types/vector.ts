
import { GraphQLScalarType, Kind } from 'graphql';
import pgvector from 'pgvector/knex';

export const GraphQLVector = new GraphQLScalarType({
	name: 'GraphQLVector',
	description: 'Vector value, List of Float',
	serialize(value) {
		if (!value) return value;
		if (typeof value !== 'string') {
			throw new Error('Value must be a String');
		}

		return pgvector.fromSql(value);
	},
	parseValue(value) {

		return pgvector.toSql(value);
	},
	parseLiteral(ast) {
		if (ast.kind !== Kind.LIST && ast.values.every(value => typeof value === 'number')) {
			throw new Error('Value must be a List of FLoat');
		}

		return ast.values
	},
});
