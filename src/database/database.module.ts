import { Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

// Opções de configuração para o TypeORM
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres', // Tipo do banco de dados (neste caso, PostgreSQL)
  host: 'localhost', // Endereço do banco de dados
  port: 5432, // Porta do banco de dados
  username: 'postgres', // Nome de usuário do banco de dados
  password: 'docker', // Senha do banco de dados
  database: 'devtraining', // Nome do banco de dados
  entities: [], // Entidades a serem incluídas na configuração (ainda não especificadas)
  synchronize: true, // Sincroniza automaticamente as entidades com o banco de dados (apenas para desenvolvimento)
};

@Module({
  imports: [
    // Configuração do módulo de banco de dados usando TypeOrmModule
    TypeOrmModule.forRootAsync({
      // Função assíncrona para fornecer as opções de configuração
      useFactory: async () => {
        // Retorna as opções de configuração do banco de dados
        return {
          ...dataSourceOptions,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
